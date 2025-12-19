// Flows will be imported for their side effects in this file.

// filepath: next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
