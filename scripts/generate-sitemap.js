const fs = require('fs')
const path = require('path')

// Deploy base URL — change this if you deploy to a different domain
const BASE_URL = 'https://shhresth.github.io/Portfolio'
const OUT = path.join(process.cwd(), 'public')

function ensureOutDir() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true })
}

function buildSinglePageSitemap() {
  const today = new Date().toISOString()
  // Only the root URL for a single-page app
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${BASE_URL}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n</urlset>`
}

function writeRobots() {
  const robots = `User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml\n`
  fs.writeFileSync(path.join(OUT, 'robots.txt'), robots, 'utf8')
}

function main() {
  ensureOutDir()
  const sitemap = buildSinglePageSitemap()
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap, 'utf8')
  writeRobots()
  console.log('Single-page sitemap and robots.txt generated in', OUT)
}

main()
