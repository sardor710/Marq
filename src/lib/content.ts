export interface NavItem {
  label: string;
  href: string;
  columns?: {
    heading?: string;
    links: { label: string; href: string }[];
  }[];
}

export const topNav: NavItem[] = [
  {
    label: "Smartwatches",
    href: "#",
    columns: [
      {
        heading: "Featured",
        links: [
          { label: "MARQ Collection", href: "#" },
          { label: "fēnix Series", href: "#" },
          { label: "Forerunner Series", href: "#" },
          { label: "All Smartwatches", href: "#" },
        ],
      },
      {
        heading: "By Activity",
        links: [
          { label: "Running", href: "#" },
          { label: "Adventure & Outdoor", href: "#" },
          { label: "Golf", href: "#" },
          { label: "Marine & Sailing", href: "#" },
          { label: "Aviation", href: "#" },
        ],
      },
    ],
  },
  { label: "Sports & Outdoor", href: "#" },
  { label: "Auto & Home", href: "#" },
  { label: "Marine", href: "#" },
  { label: "Aviation", href: "#" },
  { label: "Support", href: "#" },
];

export const footerColumns = [
  {
    heading: "Customer Service",
    links: [
      { label: "Support Center", href: "#" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Order Status", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Garmin", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Garmin Connect", href: "#" },
      { label: "Garmin Express", href: "#" },
      { label: "Connect IQ", href: "#" },
    ],
  },
  {
    heading: "Partnerships",
    links: [
      { label: "Aviation Solutions", href: "#" },
      { label: "Marine Solutions", href: "#" },
      { label: "Developer Programs", href: "#" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Security", href: "#" },
  { label: "Compliance", href: "#" },
];
