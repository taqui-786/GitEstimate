'use server'
import cheerio from "cheerio";
import _ from "lodash";



async function fetchYears(username:string) {
  const data = await fetch(`https://github.com/${username}`);
  const $ = cheerio.load(await data.text());
  return $(".js-year-link")
    .get()
    .map((a) => {
      const $a = $(a);
      return {
        href: $a.attr("href"),
        text: $a.text().trim()
      };
    });
}

async function fetchDataForYear(url:any, year:string) {
  const data = await fetch(`https://github.com${url}`);
  const $ = cheerio.load(await data.text());
  
  const contribText = $(".js-yearly-contributions h2")
    .text()
    .trim()
    .match(/^([0-9,]+)\s/);
  let contribCount;
  if (contribText) {
    [contribCount] = contribText;
    contribCount = parseInt(contribCount.replace(/,/g, ""), 10);
  }

  return {
    year,
    total: contribCount || 0,

  };
}

export async function fetchDataForAllYears(username:string) {
  const years = await fetchYears(username);
  return Promise.all(
    years.map((year) => fetchDataForYear(year.href, year.text))
  ).then((resp) => {
    const totalContributions = resp.reduce((total, yearData) => total + yearData.total, 0);
   
    return {
  
      total: totalContributions
    };
  });
}