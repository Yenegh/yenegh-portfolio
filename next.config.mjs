/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? "/yenegh-portfolio" : "",
  assetPrefix: isProd ? "/yenegh-portfolio/" : "",
};

export default nextConfig;