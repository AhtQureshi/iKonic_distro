// Site-wide content shared by every page (header, footer, socials).

// Artist plan prices, shared by the home pricing preview and the pricing page.
export const planPrices = { basic: { monthly: '$4.99', annual: '$3.99' }, pro: { monthly: '$9.99', annual: '$7.99' }, proPlus: { monthly: '$19.99', annual: '$15.99' } };

export const navigation = [
  { id: 'distribution', label: 'Distribution', href: '/distribution' },
  { id: 'publishing', label: 'Publishing', href: '/publishing' },
  { id: 'advance', label: 'Advance', href: '/advance' },
  { id: 'pricing', label: 'Pricing', href: '/pricing' },
  { id: 'labels', label: 'For Labels', href: '/labels' },
];

export const headerActions = [
  { label: 'Log In', href: '#', variant: 'outline', size: 'sm' },
  { label: 'Start Free', href: '#', variant: 'primary', size: 'sm', iconRight: 'arrow-right' },
];

export const footer = {
  tagline: 'Artists Own More Here.',
  links: [
    { label: 'Distribution', href: '/distribution' },
    { label: 'Publishing', href: '/publishing' },
    { label: 'Advance', href: '/advance' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'For Labels', href: '/labels' },
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
