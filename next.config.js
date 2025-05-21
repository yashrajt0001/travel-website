/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'], // Allow images from Google Storage
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/gtv-videos-bucket/**',
      },
    ],
    // Only use unoptimized in development if needed
    unoptimized: process.env.NODE_ENV === 'development', 
  },
};

module.exports = nextConfig;
