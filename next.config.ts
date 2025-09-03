import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cafetaria.1a0b8d0a0494f9d2d0c70ca8f1d86580.r2.cloudflarestorage.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
