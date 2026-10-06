// Pricing page content. Edit copy, prices and lists here; layouts live in the containers.
import { planPrices } from './site.js';

export const hero = {
  eyebrow: 'Pricing',
  title: 'Simple Plans.<br><span class="text-red">Bigger Opportunities.</span>',
  text: 'Choose the plan that fits your goals. Distribute, publish, get funded, and manage your entire music business — all in one platform.',
  billing: {
    label: 'Billing period',
    options: [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Annual', value: 'annual' },
    ],
    active: 'monthly',
    save: 'Save up to 20%',
  },
  note: { icon: 'crown-dots', text: 'Artists<br>Own More Here.' },
};

export const plans = {
  annualNote: 'billed annually',
  items: [
    {
      name: 'BASIC',
      tagline: 'Everything you need to get started.',
      price: planPrices.basic.monthly,
      annualPrice: planPrices.basic.annual,
      features: ['Worldwide distribution (250+ stores)', 'Keep 100% of your rights', 'Unlimited releases', 'Basic analytics', 'Real-time release status', 'Standard support'],
      cta: { label: 'Get Started', href: '#' },
    },
    {
      name: 'PRO',
      tagline: 'For serious independent artists.',
      price: planPrices.pro.monthly,
      annualPrice: planPrices.pro.annual,
      featured: true,
      badge: 'Most Popular',
      features: ['Everything in Basic', 'Advanced analytics', 'Publishing administration', 'Royalty splits (unlimited)', 'Smart links', 'Team members (up to 5)', 'Priority support'],
      cta: { label: 'Get Started', href: '#' },
    },
    {
      name: 'PRO+',
      tagline: 'For artists ready to scale.',
      price: planPrices.proPlus.monthly,
      annualPrice: planPrices.proPlus.annual,
      features: ['Everything in Pro', 'Advance eligibility', 'AI metadata assistant', 'A&amp;R opportunities', 'Team members (up to 15)', 'Custom release scheduling', 'Priority support'],
      cta: { label: 'Get Started', href: '#' },
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
    { icon: 'infinity', label: 'Unlimited Releases', values: [true, true, true] },
    { icon: 'shield-check', label: 'Keep 100% of Your Rights', values: [true, true, true] },
    { icon: 'chart-columns', label: 'Basic Analytics', values: [true, true, true] },
    { icon: 'chart-line', label: 'Advanced Analytics', values: [false, true, true] },
    { icon: 'document', label: 'Publishing Administration', values: [false, true, true] },
    { icon: 'split', label: 'Royalty Splits', values: [false, true, true] },
    { icon: 'link', label: 'Smart Links', values: [false, true, true] },
    { icon: 'users-pair', label: 'Team Members', values: ['1', '5', '15'] },
    { icon: 'arrows-vertical', label: 'Advance Eligibility', values: [false, false, true] },
    { icon: 'square-check', label: 'AI Metadata Assistant', values: [false, false, true] },
    { icon: 'circle-check', label: 'A&amp;R Opportunities', values: [false, false, true] },
    { icon: 'calendar', label: 'Custom Release Scheduling', values: [false, false, true] },
    { icon: 'shield-alert', label: 'Priority Support', values: [false, true, true] },
  ],
};

export const audience = [
  {
    icon: 'users-pair',
    eyebrow: 'For Labels',
    title: 'Scalable Plans for<br>Labels &amp; Teams.',
    text: 'Manage multiple artists, releases, permissions, and payouts — all in one place.',
    items: ['Up to 50+ artists', 'Advanced team tools', 'Custom permissions', 'Dedicated support'],
    action: { label: 'View Label Plans', href: 'labels.html' },
  },
  {
    icon: 'grid-table',
    eyebrow: 'For Distributors',
    title: 'Distributor Access<br>Upon Request.',
    text: 'Custom distribution solutions for larger operations, partners, and enterprises.',
    items: ['Custom terms', 'White-label options', 'Dedicated infrastructure', 'Personalized support'],
    action: { label: 'Request Access', href: 'support.html#contact' },
  },
];

export const included = {
  eyebrow: 'Included with every plan',
  title: 'More Value. <span class="text-red">No Hidden Fees.</span>',
  note: 'Transparent pricing. No setup fees. No surprises. Just everything you need to grow.',
  items: [
    { icon: 'bolt-outline', title: '100% Ownership', text: 'You keep your rights.' },
    { icon: 'globe-lines', title: 'Global Reach', text: '250+ stores worldwide.' },
    { icon: 'split', title: 'Royalty Splits', text: 'Easy split management.' },
    { icon: 'dollar-outline', title: 'Fast Payouts', text: 'Get paid on time.' },
  ],
};

export const faq = {
  eyebrow: 'Frequently asked questions',
  title: 'Quick answers.',
  text: 'Everything you need to know about our pricing.',
  action: { label: 'View All FAQs', href: 'support.html' },
  items: [
    { q: 'Can I upgrade or downgrade my plan?', a: 'Yes — you can switch plans at any time from your dashboard, and the change takes effect immediately.' },
    { q: 'Are there any setup fees?', a: 'No — there are no setup fees, ever. You only pay the plan price you see.' },
    { q: 'Do I keep 100% of my rights?', a: 'Yes — you always keep 100% ownership of your music and your rights on every plan.' },
    { q: 'How does the advance eligibility work?', a: "Pro+ members unlock eligibility for Ikonic Advance, our artist funding program based on your catalog's performance." },
  ],
};

export const cta = {
  variant: 'boxed',
  eyebrow: 'Your next chapter starts here',
  title: 'Own More. <span class="text-red">Build Bigger.</span>',
  text: 'Join thousands of independent artists using Ikonic to take control of their music business.',
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', iconRight: 'arrow-right' },
    { label: 'View Platform', href: '#', variant: 'outline' },
  ],
};
