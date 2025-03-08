/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // enables static exports
  reactStrictMode: true,
  distDir: 'out',
  basePath: '/deyshin', // for GitHub Pages deployment
  images: {
    unoptimized: true, // disable image optimization for static export
  },
};

module.exports = nextConfig;