/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [45, 55, 58, 75],
  },
}

export default nextConfig
