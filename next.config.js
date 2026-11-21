/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'localhost',
    'localhost:3000',
    'localhost:3001',
    '127.0.0.1',
    '127.0.0.1:3000',
    '127.0.0.1:3001',
    '192.168.1.115',
    '192.168.1.115:3000',
    '192.168.1.115:3001',
    '*.local',
  ],
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
