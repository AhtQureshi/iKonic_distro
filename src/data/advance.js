// Advance page content. Edit copy and numbers here; layouts live in the Advance* containers.

export const hero = {
  eyebrow: 'Ikonic Advance',
  title: 'Turn Your<br>Royalties Into<br><span class="text-red">Momentum.</span>',
  text: 'Pro+ and Label Enterprise members are eligible to apply for Ikonic Advance. Every application is reviewed by our funding partner based on your catalog’s performance — eligibility is not a guarantee of funding.',
  // Decorative full-bleed background (public/assets/images/), 1983×793.
  image: { file: 'advance-hero.webp', width: 1983, height: 793 },
  actions: [
    { label: 'Apply Now', href: '#', variant: 'primary', iconRight: 'arrow-right' },
    { label: 'See How It Works', href: '#process', variant: 'outline', iconLeft: 'play-circle' },
  ],
  points: [
    { icon: 'bolt-outline', title: 'Catalog-Based Review', text: 'Applications are reviewed on catalog performance' },
    { icon: 'chart-columns', title: 'Keep 100% Ownership', text: 'You keep 100% ownership of your music' },
    { icon: 'clock', title: 'Partner Review', text: 'Each application is reviewed individually' },
    { icon: 'link', title: 'Keep Releasing', text: 'Continue releasing music while you apply' },
  ],
  offer: {
    icon: 'bolt',
    title: 'Advance Application',
    amount: 'In Review',
    status: 'Partner Review',
    rows: [
      { label: 'Eligible Plans', value: 'Pro+, Label Enterprise' },
      { label: 'Reviewed On', value: 'Catalog performance' },
      { label: 'Decision By', value: 'Funding partner' },
      { label: 'Ownership', value: '100% yours' },
    ],
  },
};

export const estimator = {
  eyebrow: 'Advance Estimator',
  title: 'See What You<br>Could Get Funded.',
  text: 'Get an estimate based on your monthly royalties. No impact to your rights. No credit check.',
  input: {
    label: 'Enter your average monthly royalties',
    min: 500,
    max: 50000,
    step: 100,
    value: 7500,
    minLabel: '$500',
    maxLabel: '$50,000+',
  },
  // Estimated advance = monthly royalties x multiplier, rounded to the nearest `round`.
  multiplier: 5.6,
  round: 100,
  result: {
    label: 'Estimated Advance',
    info: 'Estimate based on your average monthly royalties',
    termsTitle: 'Estimated Terms',
    rows: [
      { label: 'Repayment', value: '12% of monthly royalties' },
      { label: 'Estimated Term', value: '~10-14 months' },
      { label: 'You Keep', value: '100% ownership of your music' },
    ],
    action: { label: 'Apply Now', href: '#', variant: 'primary', iconRight: 'arrow-right', block: true },
  },
  note: 'Estimates are based on historical catalog performance. Final offers may vary.',
};

export const uses = {
  eyebrow: 'Built For Independent Artists',
  title: 'Fuel Your Next Chapter.',
  text: 'If your application is approved, use your advance to invest in your music, your brand, and your future.',
  cards: [
    { icon: 'mic', title: 'Create More Music', text: 'Studio time, producers, and recording costs.', tone: 1 },
    { icon: 'megaphone', title: 'Grow Your Audience', text: 'Marketing, content, and promotion.', tone: 2 },
    { icon: 'video', title: 'Upgrade Your Visuals', text: 'Music videos, shoots, and creative production.', tone: 3 },
    { icon: 'users', title: 'Expand Your Team', text: 'Invest in your team and infrastructure.', tone: 4 },
  ],
};

export const tracking = {
  eyebrow: 'Full Transparency',
  title: 'Track Everything<br>In Real Time.',
  text: 'If you’re approved, see your advance, repayment progress, upcoming deductions, and more — all inside your Ikonic dashboard.',
  checks: [
    'Real-time repayment tracking',
    'Clear payment history',
    'Continue earning and releasing',
    'Full transparency',
  ],
  action: { label: 'See Platform Preview', href: '#', variant: 'outline', iconRight: 'arrow-right' },
  dashboard: {
    nav: ['Dashboard', 'Catalog', 'Analytics', 'Publishing', 'Royalties', 'Advance', 'Payouts', 'Team', 'Settings'],
    active: 'Advance',
    title: 'Advance',
    tabs: ['Overview', 'History'],
    stats: [
      { label: 'Total Advanced', value: '$50,000' },
      { label: 'Repaid', value: '$12,400', pct: '24%' },
      { label: 'Remaining', value: '$37,600', pct: '76%' },
    ],
    progress: { label: 'Repayment Progress', value: 24, caption: '24% Complete' },
    paymentsTitle: 'Recent Payments',
    payments: [
      { date: 'Aug 1, 2026', amount: '$882.40', rate: '12%' },
      { date: 'Jul 1, 2026', amount: '$1,024.18', rate: '12%' },
      { date: 'Jun 1, 2026', amount: '$980.32', rate: '12%' },
    ],
  },
};

export const process = {
  id: 'process',
  eyebrow: 'A Simple Process',
  title: 'Apply. Get Reviewed. Keep Creating.',
  steps: [
    { number: '01', title: 'Check Eligibility', text: 'Advance applications are open on Pro+ and Label Enterprise.' },
    { number: '02', title: 'Apply', text: 'Submit your catalog for review.' },
    { number: '03', title: 'Partner Review', text: 'Our funding partner reviews your earnings and performance.' },
    { number: '04', title: 'Decide', text: 'If you receive an offer, review the terms and choose whether to accept.' },
  ],
};

export const faq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Quick answers.',
  text: 'Everything you need to know about Ikonic Advance.',
  items: [
    { q: 'Who can apply?', a: 'Ikonic Pro+ members, and artists on a Label Enterprise roster, are eligible to apply for Ikonic Advance.' },
    { q: 'Is funding guaranteed?', a: 'No — eligibility means you can apply. Every application is reviewed by our funding partner, and any offer, amount and terms are set by the partner after review.' },
    { q: 'How are applications reviewed?', a: 'Our funding partner looks at your catalog’s earnings history and performance. Each application is reviewed individually.' },
    { q: 'Do I keep ownership of my music?', a: 'Yes — you keep 100% ownership of your music, whether or not you apply.' },
    { q: 'What catalogs are a good fit?', a: 'Catalogs with consistent streaming earnings and a verifiable royalty history are a good fit for review. Meeting these doesn’t guarantee an offer.' },
  ],
};

export const cta = {
  eyebrow: 'Your Catalog. More Opportunities.',
  title: 'Check Your Eligibility. <span class="text-red">Go Further.</span>',
  text: 'Apply for Ikonic Advance on Pro+ or Label Enterprise and take your music career to the next level.',
  actions: [
    { label: 'Apply Now', href: '#', variant: 'primary', iconRight: 'arrow-right' },
    { label: 'Learn More', href: '#', variant: 'outline' },
  ],
  stats: [
    { icon: 'music', value: 'Pro+', label: 'Eligibility Included' },
    { icon: 'users', value: 'All Genres', label: 'Independent Artists' },
    { icon: 'globe', value: 'Global', label: 'Catalogs Reviewed' },
  ],
};
