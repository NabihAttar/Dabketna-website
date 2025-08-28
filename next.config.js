/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'], // only scan these files
  reactStrictMode: true, // recommended
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all remote images
      },
    ],
  },
  webpack(config) {
    // Add support for importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
