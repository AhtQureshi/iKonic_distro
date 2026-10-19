// Site-wide content shared by every page (header, footer, socials).

// Plan prices (approved 2026-10-12), shared by the home pricing preview and the pricing page.
// `annual` is the full yearly price (20% off 12 months). Label plans add a per-seat price for extra artist seats.
export const planPrices = {
  basic: { monthly: '$4.99', annual: '$47.90' },
  pro: { monthly: '$9.99', annual: '$95.90' },
  proPlus: { monthly: '$19.99', annual: '$191.90' },
  labelStarter: { monthly: '$39', annual: '$374.40', seat: '$6', seatAnnual: '$57.60' },
  labelGrowth: { monthly: '$99', annual: '$950.40', seat: '$5', seatAnnual: '$48.00' },
  labelEnterprise: { monthly: '$249', annual: '$2,390.40', seat: '$4', seatAnnual: '$38.40' },
};

export const navigation = [
  { id: 'distribution', label: 'Distribution', href: '/distribution' },
  { id: 'publishing', label: 'Publishing', href: '/publishing' },
  { id: 'advance', label: 'Advance', href: '/advance' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'labels', label: 'For Labels', href: '/labels' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const headerActions = [
  { label: 'Log In', href: '#', variant: 'outline', size: 'sm' },
  { label: 'Start Free Trial', href: '#', variant: 'primary', size: 'sm', iconRight: 'arrow-right' },
];

export const footer = {
  tagline: 'Artists Own More Here.',
  links: [
    { label: 'Distribution', href: '/distribution' },
    { label: 'Publishing', href: '/publishing' },
    { label: 'Advance', href: '/advance' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'For Labels', href: '/labels' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} IKONIC. All rights reserved.`,
};

export const socials = [
  { icon: 'instagram', label: 'Instagram', href: '#' },
  { icon: 'youtube', label: 'YouTube', href: '#' },
  { icon: 'tiktok', label: 'TikTok', href: '#' },
  { icon: 'x', label: 'X', href: '#' },
  { icon: 'linkedin', label: 'LinkedIn', href: '#' },
];

export const stores = [
  { name: 'Spotify', logo: 'spotify' },
  { name: 'Music', logo: 'apple-music' },
  { name: 'YouTube', logo: 'youtube' },
  { name: 'TikTok', logo: 'tiktok' },
  { name: 'amazon music', logo: 'amazon-music' },
  { name: 'Instagram', logo: 'instagram' },
  { name: 'TIDAL', logo: 'tidal' },
  { name: 'deezer', logo: 'deezer' },
];
