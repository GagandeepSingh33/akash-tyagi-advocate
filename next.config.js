/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Strict mode for better React practices
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Power by header removal for security
  poweredByHeader: false,
  // SEO: Canonical trailing slash
  trailingSlash: false,
};

module.exports = nextConfig;
