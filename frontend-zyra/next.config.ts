import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // disable ESLint errors temporarily
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠ disables TypeScript errors during build
  },
};

export default nextConfig;
