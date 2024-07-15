/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }],
  },
}

export default nextConfig
