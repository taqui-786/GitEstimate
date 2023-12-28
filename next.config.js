/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
    ],
    formats: ["image/avif", "image/webp"],
    loader: "default",
    domains: ["ghchart.rshah.org"], // Add the domain from which you are loading SVGs
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
