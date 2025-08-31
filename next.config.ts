import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/my-react-port',
  assetPrefix: '/my-react-port/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
