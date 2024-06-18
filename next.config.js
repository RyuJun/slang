/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    RIOT_API_KEY: "RGAPI-4b3d4787-b483-40be-a4c7-52e2fe280f80",
  },
  async rewrites() {
    return [
      {
        source: "/riot/:path*",
        destination: "https://asia.api.riotgames.com/riot/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
