import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages if using a custom domain
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
};

export default nextConfig;
