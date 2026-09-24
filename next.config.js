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
      {
        source: '/disposable-section/1',
        destination: '/disposable-section/disposable-aprons',
        permanent: true,
      },
      {
        source: '/disposable-section/2',
        destination: '/disposable-section/disposable-bouffant-cap',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
