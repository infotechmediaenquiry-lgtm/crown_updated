/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.crownhealthcare.co.in',
          },
        ],
        destination: 'https://crownhealthcare.co.in/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
