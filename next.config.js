/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // enables static exports
  reactStrictMode: true,
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/deyshin' : '', // Only use basePath in production
  images: {
    unoptimized: true, // disable image optimization for static export
    loader:"custom",
    loaderFile:"src/app/_components/custom-image-loader.tsx",
  },
};

module.exports = nextConfig;