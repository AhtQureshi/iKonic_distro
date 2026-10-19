// Pricing page content. Edit copy, prices and lists here; layouts live in the containers.
// Plans follow the approved subscription model (2026-10-12). Prices live in site.js.
import { planPrices } from './site.js';

// Every "Get Started" button. Points at the platform's signup once its URL is confirmed.
const startTrial = { label: 'Start Free Trial', href: '#' };

export const hero = {
  eyebrow: 'Pricing',
  title: 'Simple Plans.<br><span class="text-red">Bigger Opportunities.</span>',
  // Decorative full-bleed background (public/assets/images/), 1983×793.
  image: { file: 'pricing-hero.webp', width: 1983, height: 793 },
  text: 'Choose the plan that fits your goals. Every plan starts with a 7-day free trial, and you keep 100% ownership of your music.',
  billing: {
    label: 'Billing period',
    options: [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Annual', value: 'annual' },
    ],
    active: 'monthly',
    save: 'Save 20% annually',
  },
  note: { icon: 'crown-dots', text: 'Artists<br>Own More Here.' },
};

const annualNote = 'billed annually · save 20%';

export const plans = {
  annualNote,
  items: [
    {
      name: 'BASIC',
      tagline: 'The Release Engine',
      price: planPrices.basic.monthly,
      annualPrice: planPrices.basic.annual,
      features: [
        'Worldwide distribution (250+ stores)',
        'Unlimited tracks &amp; products',
        'Keep 100% ownership of your music',
        'Basic analytics dashboard',
        'ISRC + UPC generation',
        'Smart links',
        'YouTube Content ID',
        'Single, EP &amp; Album releases',
        '1 artist · Standard support',
      ],
      cta: startTrial,
    },
    {
      name: 'PRO',
      tagline: 'The Collection Engine',
      price: planPrices.pro.monthly,
      annualPrice: planPrices.pro.annual,
      featured: true,
      badge: 'Most Popular',
      features: [
        'Everything in Basic, plus:',
        'Publishing administration (20% admin fee)',
        'Playlist pitching access',
        'Royalty splits',
        'Scheduled releases',
      ],
      cta: startTrial,
    },
    {
      name: 'PRO+',
      tagline: 'The Growth Engine',
      price: planPrices.proPlus.monthly,
      annualPrice: planPrices.proPlus.annual,
      features: [
        'Everything in Pro, plus:',
        'My A&amp;R — your AI A&amp;R manager',
        'Ikonic Advance eligibility (application &amp; partner review)',
        'Team accounts (up to 6 members)',
        'Priority support',
        'Fast Track Review',
        'Catalog valuation',
      ],
      cta: startTrial,
    },
  ],
};

// Comparison table. Cell values: true = included, false = not included, anything else is shown as-is.
export const compare = {
  label: 'Features',
  columns: ['Basic', 'Pro', 'Pro+'],
  highlight: 1,
  rows: [
    { icon: 'globe-lines', label: 'Worldwide Distribution (250+ stores)', values: [true, true, true] },
    { icon: 'infinity', label: 'Unlimited Tracks &amp; Products', values: [true, true, true] },
    { icon: 'shield-check', label: 'Keep 100% Ownership of Your Music', values: [true, true, true] },
    { icon: 'chart-columns', label: 'Analytics Dashboard', values: [true, true, true] },
    { icon: 'square-check', label: 'ISRC + UPC Generation', values: [true, true, true] },
    { icon: 'link', label: 'Smart Links', values: [true, true, true] },
    { icon: 'youtube', label: 'YouTube Content ID', values: [true, true, true] },
    { icon: 'document', label: 'Publishing Administration', values: [false, '20% admin fee', '20% admin fee'] },
    { icon: 'megaphone', label: 'Playlist Pitching Access', values: [false, true, true] },
    { icon: 'split', label: 'Royalty Splits', values: [false, true, true] },
    { icon: 'calendar', label: 'Scheduled Releases', values: [false, true, true] },
    { icon: 'mic', label: 'My A&amp;R (AI A&amp;R Manager)', values: [false, false, true] },
    { icon: 'arrows-vertical', label: 'Advance Eligibility', values: [false, false, true] },
    { icon: 'users-pair', label: 'Team Members', values: [false, false, 'Up to 6'] },
    { icon: 'bolt-outline', label: 'Fast Track Review', values: [false, false, true] },
    { icon: 'coins', label: 'Catalog Valuation', values: [false, false, true] },
    { icon: 'headset', label: 'Support', values: ['Standard', 'Standard', 'Priority'] },
  ],
};

// Label plans: 1 seat = 1 artist account; extra seats are billed per seat.
const seats = (included, { seat, seatAnnual }) => ({
  seats: `${included} artist seats included · +${seat}/seat/mo`,
  annualSeats: `${included} artist seats included · +${seatAnnual}/seat/yr`,
});

export const labelPlans = {
  id: 'labels',
  eyebrow: 'For Labels',
  title: 'Plans for Your <span class="text-red">Whole Roster.</span>',
  text: 'One account for every artist on your label. 1 seat = 1 artist account, and you can add seats as your roster grows.',
  annualNote,
  items: [
    {
      name: 'STARTER',
      tagline: 'The Label Foundation',
      price: planPrices.labelStarter.monthly,
      annualPrice: planPrices.labelStarter.annual,
      ...seats(5, planPrices.labelStarter),
      features: [
        'Roster distribution',
        'Central label dashboard',
        'Basic roster analytics',
        'ISRC + UPC generation',
        'Smart links',
        'YouTube Content ID',
        '5 team members',
        'Standard support',
      ],
      cta: startTrial,
    },
    {
      name: 'GROWTH',
      tagline: 'The Label Operating System',
      price: planPrices.labelGrowth.monthly,
      annualPrice: planPrices.labelGrowth.annual,
      ...seats(15, planPrices.labelGrowth),
      featured: true,
      features: [
        'Everything in Starter, plus:',
        '10 team members',
        'My A&amp;R for the roster',
        'Publishing administration across the roster',
        'Playlist pitching access',
        'Royalty splits',
        'Bulk upload tools',
        'Priority support',
      ],
      cta: startTrial,
    },
    {
      name: 'ENTERPRISE',
      tagline: 'The Label Growth Infrastructure',
      price: planPrices.labelEnterprise.monthly,
      annualPrice: planPrices.labelEnterprise.annual,
      ...seats(50, planPrices.labelEnterprise),
      features: [
        'Everything in Growth, plus:',
        '15 team members',
        'Advance eligibility across the roster (partner review)',
        'Dedicated account manager',
        'API access',
        'Custom payment splits',
        'Assisted onboarding',
      ],
      cta: startTrial,
    },
  ],
  more: { text: 'More than 50 artists?', action: { label: 'Talk to us for a custom quote', href: '/contact' } },
};

export const audience = [
  {
    icon: 'users-pair',
    eyebrow: 'For Larger Rosters',
    title: 'More Than<br>50 Artists?',
    text: 'Rosters above 50 artists get a custom quote, reviewed and approved by our team.',
    items: ['Custom quote', 'Manually approved', 'Everything in Enterprise', 'Built around your roster'],
    action: { label: 'Talk to Us', href: '/contact' },
  },
  {
    icon: 'grid-table',
    eyebrow: 'For Distributors',
    title: 'Distributor Access<br>Upon Request.',
    text: 'Distributor accounts aren’t a public plan. Each one is custom-quoted and manually approved.',
    items: ['Custom quote', 'Manually approved', 'Terms set per account', 'Direct contact with our team'],
    action: { label: 'Talk to Us', href: '/contact' },
  },
];

export const included = {
  eyebrow: 'Included with every plan',
  title: 'More Value. Clear Pricing.',
  note: 'Transparent plan pricing. No setup fees. Every fee disclosed up front.',
  items: [
    { icon: 'bolt-outline', title: '100% Ownership', text: 'Your music stays yours.' },
    { icon: 'globe-lines', title: 'Global Reach', text: '250+ stores worldwide.' },
    { icon: 'chart-columns', title: 'Transparent Reporting', text: 'See what you earn and why.' },
    { icon: 'shield-check', title: 'Secure Account', text: 'Your catalog, protected.' },
  ],
};

export const faq = {
  eyebrow: 'Frequently asked questions',
  title: 'Quick answers.',
  text: 'Everything you need to know about our pricing.',
  items: [
    { q: 'Is there a free trial?', a: 'Yes — every plan starts with a 7-day free trial. After that it bills monthly, or annually at a 20% discount.' },
    { q: 'What fees apply besides the plan price?', a: 'A flat 10% platform fee applies to royalties on all paid plans. Where publishing administration is active (Pro, Pro+, Label Growth and Enterprise), a 20% publishing admin fee applies to the publishing royalties we collect. There are no setup fees.' },
    { q: 'Can I upgrade or downgrade my plan?', a: 'Yes — you can change your plan from the billing settings in your dashboard.' },
    { q: 'How do label seats work?', a: 'Each seat is one artist account. Starter includes 5 seats, Growth 15 and Enterprise 50, and you can add extra seats from your billing settings. For more than 50 artists, talk to us for a custom quote.' },
    { q: 'Do I keep ownership of my music?', a: 'Yes — you keep 100% ownership of your music on every plan.' },
    { q: 'How does the advance eligibility work?', a: "Pro+ members, and Label Enterprise rosters, are eligible to apply for Ikonic Advance. Each application is reviewed by our funding partner based on your catalog's performance — eligibility is not a guarantee of funding." },
  ],
};

export const cta = {
  variant: 'split',
  eyebrow: 'Your next chapter starts here',
  title: 'Own More. <span class="text-red">Build Bigger.</span>',
  text: 'Join thousands of independent artists using Ikonic to take control of their music business.',
  actions: [
    { ...startTrial, variant: 'primary', iconRight: 'arrow-right' },
    { label: 'View Platform', href: '#', variant: 'outline' },
  ],
};
