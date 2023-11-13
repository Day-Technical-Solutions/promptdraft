/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
      domains: ['lh3.googleusercontent.com', process.env.AWS_HOSTNAME],
  },
}

module.exports = nextConfig
