/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for OpenNext
  output: 'standalone',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
