export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'SLANG',
  description: 'League of Legends game record search service',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Detail',
      href: '/detail',
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
