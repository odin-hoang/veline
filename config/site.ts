export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "VE Line - Balance for your finances",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Staking",
      href: "/staking",
    },
    {
      label: "Voting",
      href: "/voting",
    },
  ],
  navMenuItems: [
    {
      label: "Staking",
      href: "/staking",
    },
    {
      label: "Voting",
      href: "/voting",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
