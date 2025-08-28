const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    // prevents Next.js from collecting traces, avoiding stack overflow
    scrollRestoration: false,
    craCompat: false,
    outputFileTracingExcludes: {
      '**/node_modules/**': true,
      '**/.next/**': true,
      '**/public/**': true,
    },
  },
};

module.exports = nextConfig;
