/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
      domains: ['lh3.googleusercontent.com', process.env.AWS_HOSTNAME, 'res.cloudinary.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `/api/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
