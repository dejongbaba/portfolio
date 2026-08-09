export interface SiteLink {
  label: string;
  to?: string;
  href?: string;
}

export const mainNav: SiteLink[] = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Writing', to: '/writing' },
  { label: 'Contact', href: '/#contact' },
];

export const footerLinks: SiteLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Writing', to: '/writing' },
  { label: 'Email', href: 'mailto:agunbiade.adedeji94@gmail.com' },
];

export const socialLinks = [
  { label: 'X', href: 'https://x.com/luccithedev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adedeji-agunbiade/' },
];