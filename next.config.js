// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     outputFileTracingExcludes: [
//       '**/node_modules/**',
//       '**/.next/**',
//       '**/public/**'
//     ],
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: [
      "localhost",       // remove this if not needed
      "yourdomain.com",  // replace with your actual image domain(s)
      "cdn.yoursite.com" // add more if required
    ],
  },
};

module.exports = nextConfig;
