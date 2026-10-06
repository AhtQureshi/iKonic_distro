// Site-wide content shared by every page (header, footer, socials).

// Artist plan prices, shared by the home pricing preview and pricing.html.
export const planPrices = { basic: { monthly: '$4.99', annual: '$3.99' }, pro: { monthly: '$9.99', annual: '$7.99' }, proPlus: { monthly: '$19.99', annual: '$15.99' } };

export const navigation = [
  { id: 'distribution', label: 'Distribution', href: 'distribution.html' },
  { id: 'publishing', label: 'Publishing', href: 'publishing.html' },
  { id: 'advance', label: 'Advance', href: 'advance.html' },
  { id: 'pricing', label: 'Pricing', href: 'pricing.html' },
  { id: 'labels', label: 'For Labels', href: 'labels.html' },
  {
    id: 'resources',
    label: 'Resources',
    children: [
      { label: 'Help Center', href: 'support.html', description: 'Guides and answers' },
      { label: 'Blog', href: '#', description: 'News and artist stories' },
      { label: 'Contact', href: 'support.html#contact', description: 'Talk to our team' },
    ],
  },
];

export const headerActions = [
  { label: 'Log In', href: '#', variant: 'outline', size: 'sm' },
  { label: 'Start Free', href: '#', variant: 'primary', size: 'sm', iconRight: 'arrow-right' },
];

export const footer = {
  tagline: 'Artists Own More Here.',
  links: [
    { label: 'Distribution', href: 'distribution.html' },
    { label: 'Publishing', href: 'publishing.html' },
    { label: 'Advance', href: 'advance.html' },
    { label: 'Pricing', href: 'pricing.html' },
    { label: 'For Labels', href: 'labels.html' },
    { label: 'Resources', href: 'support.html' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: 'support.html#contact' },
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
