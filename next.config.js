/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_RIOT_API_KEY: 'RGAPI-4b3d4787-b483-40be-a4c7-52e2fe280f80',
    NEXT_PUBLIC_RIOT_BASE_URL: 'https://asia.api.riotgames.com/riot',
    NEXT_PUBLIC_LOL_BASE_URL: 'https://asia.api.riotgames.com/lol',
    NEXT_PUBLIC_CDN_BASE_URL: 'https://ddragon.leagueoflegends.com/cdn/14.12.1',
    NEXT_PUBLIC_KR_LOL_BASE_URL: 'https://kr.api.riotgames.com/lol-kr',
  },
  async rewrites() {
    return [
      {
        source: '/riot/:path*',
        destination: 'https://asia.api.riotgames.com/riot/:path*',
      },
      {
        source: '/lol/:path*',
        destination: 'https://asia.api.riotgames.com/lol/:path*',
      },
      {
        source: '/lol-kr/:path*',
        destination: 'https://kr.api.riotgames.com/lol/:path*',
      },
      {
        source: '/img/:path*',
        destination: 'https://ddragon.leagueoflegends.com/cdn/14.12.1/img/:path*',
      },
      {
        source: '/data/:path*',
        destination: 'https://ddragon.leagueoflegends.com/cdn/14.12.1/data/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
