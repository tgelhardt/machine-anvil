export type NavLink = {
  label: string;
  href: string;
};

// Single source of truth for the primary navigation.
// Every page renders this list via <SiteHeader /> — no per-page copies.
export const NAV_LINKS: NavLink[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Floor", href: "/floor" },
  { label: "Season 0", href: "/season-zero" },
  { label: "Native terminal", href: "/native-terminal" },
  { label: "FAQ", href: "/faq" },
  { label: "Demo", href: "/#simulator" },
];

export const SITE = {
  name: "OK Brokers",
  tagline: "Native Broker Floor for OK Computers",
  description:
    "OK Brokers turns the existing OK Computers command system into a playable broker floor: connect, clock in, mine $BLANK, print receipts, and model BNKR-led reward desks.",
  github: "",
  disclaimer: "/disclaimer",
};
