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
    
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
