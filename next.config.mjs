/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static files
  output: 'export',
  // Configure base path and asset prefix for GitHub Pages
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  
  // Required for static image optimization
  images: {
    unoptimized: true
  },

  // Typescript settings (optional but recommended)
  typescript: {
    // This is fine for portfolio projects
    ignoreBuildErrors: true
  }
}

export default nextConfig