import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.join(__dirname, "src"),
      "@public": path.join(__dirname, "public"),
    };
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  basePath: process.env.PAGES_BASE_PATH || '',
  assetPrefix: process.env.PAGES_BASE_PATH || '',
  // Configure static file serving
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  // Add trailing slash to ensure proper asset loading
  trailingSlash: true,

};

export default nextConfig;