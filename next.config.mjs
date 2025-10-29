/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static files
  output: 'export',
  // Configure base path and asset prefix for GitHub Pages or a custom domain.
  // Use environment variables to control these at build time so the same
  // source can be deployed to either a repo-page (e.g. /Portfolio) or a
  // custom domain root (set these to empty strings when deploying to a
  // custom domain).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '/Portfolio',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX ?? '/Portfolio/',
  
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