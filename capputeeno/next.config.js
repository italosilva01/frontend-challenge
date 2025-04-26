/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
