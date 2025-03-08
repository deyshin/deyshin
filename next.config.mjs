/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/deyshin', // Replace with your repository name
  images: {
    unoptimized: true,
  },
  // Disable server-based features as GitHub Pages is a static host
  trailingSlash: true,
};

export default nextConfig;