const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_API: 'http://localhost:3000',
    PRODUCTION_API: 'https://botsgains-api-vercel.vercel.app/',
  },
};

export default nextConfig;
