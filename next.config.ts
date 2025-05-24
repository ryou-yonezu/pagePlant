import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // output: 'export', // この行を追加
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/pagePlant/' : undefined,
  // basePath: process.env.NODE_ENV === 'production' ? '/pagePlant' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
