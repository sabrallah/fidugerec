/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optimisations pour la production
  compress: true,
  poweredByHeader: false,
  // SEO et performance
  generateEtags: true,
}

module.exports = nextConfig
