/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: [
      '**/node_modules/**',
      '**/.next/**',
      '**/public/**'
    ],
  },
};

module.exports = nextConfig;
