/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/lol/:path*",
        destination: "https://kr.api.riotgames.com/lol/:path*",
      },
      // {
      //   source: "/asia/lol/:path*",
      //   destination: "https://asia.api.riotgames.com/lol/:path*",
      // },
      // {
      //   source: "/cdn/12.20.1/:path*",
      //   destination: "http://ddragon.leagueoflegends.com/:path*",
      // },
    ];
  },
};

module.exports = nextConfig;
