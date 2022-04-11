/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
module.exports = withImages();
// module.exports = {
//   images: {
//     domains: ['assets.example.com', 'www.gravatar.com'],
//   },
// };
