// Advance page content. Edit copy and numbers here; layouts live in the Advance* containers.

export const hero = {
  eyebrow: 'Ikonic Advance',
  title: 'Turn Your<br>Royalties Into<br><span class="text-red">Momentum.</span>',
  text: 'Get funding based on your music earnings, not your credit. Keep 100% of your rights and continue to grow your career.',
  actions: [
    { label: 'Apply Now', href: '#', variant: 'primary', iconRight: 'arrow-right' },
    { label: 'See How It Works', href: '#process', variant: 'outline', iconLeft: 'play-circle' },
  ],
  points: [
    { icon: 'bolt-outline', title: 'No Credit Required', text: 'Based on your catalog performance' },
    { icon: 'chart-columns', title: 'Keep 100% Ownership', text: 'You keep your rights and royalties' },
    { icon: 'clock', title: 'Fast Decisions', text: 'Get a response in as little as 24-72 hours' },
    { icon: 'link', title: 'Keep Earning', text: 'Continue releasing and collecting royalties' },
  ],
  offer: {
    icon: 'bolt',
    title: 'Advance Approved',
    amount: '$50,000',
    status: 'Funds Sent',
    rows: [
      { label: 'Monthly Royalties', value: '$7,842' },
      { label: 'Advance Amount', value: '$50,000' },
      { label: 'Repayment', value: '12% of monthly royalties' },
      { label: 'Term', value: '12 months' },
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
      { label: 'You Keep', value: '100% of your rights' },
    ],
    action: { label: 'Apply Now', href: '#', variant: 'primary', iconRight: 'arrow-right', block: true },
  },
  note: 'Estimates are based on historical catalog performance. Final offers may vary.',
};

export const uses = {
  eyebrow: 'Built For Independent Artists',
  title: 'Fuel Your Next Chapter.',
  text: 'Use your advance to invest in your music, your brand, and your future.',
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
  text: 'See your advance amount, repayment progress, upcoming deductions, and more — all inside your Ikonic dashboard.',
  checks: [
    'Real-time repayment tracking',
    'Clear payment history',
    'No hidden fees',
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
  title: 'Get Funded. Keep Creating.',
  steps: [
    { number: '01', title: 'Apply', text: 'Submit your catalog for review.' },
    { number: '02', title: 'Review', text: 'We analyze your earnings and performance.' },
    { number: '03', title: 'Get Offer', text: 'Receive your custom advance offer.' },
    { number: '04', title: 'Get Funded', text: 'Funds sent directly to you while you keep earning.' },
  ],
};

export const faq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Quick answers.',
  text: 'Everything you need to know about Ikonic Advance.',
  action: { label: 'View All FAQs', href: '#', variant: 'outline', iconRight: 'arrow-right' },
  items: [
    { q: 'Do I need a credit check?', a: 'No — your offer is based on your catalog’s earnings and performance, not your credit score.' },
    { q: 'How much can I get?', a: 'Advance amounts are based on your monthly royalties and catalog history — use the estimator above to see what you could get funded.' },
    { q: 'How and when do I get paid?', a: 'Once your offer is accepted, funds are sent directly to you — most artists receive funding within days of approval.' },
    { q: 'Do I keep 100% of my rights?', a: 'Yes — you keep 100% ownership of your rights and catalog while the advance is repaid from a share of your royalties.' },
    { q: 'What catalogs are eligible?', a: 'Catalogs with consistent streaming earnings and a verifiable royalty history are eligible for review.' },
  ],
};

export const cta = {
  eyebrow: 'Your Catalog. More Opportunities.',
  title: 'Get Funded. <span class="text-red">Go Further.</span>',
  text: 'Turn your royalties into momentum and take your music career to the next level.',
  actions: [
    { label: 'Apply Now', href: '#', variant: 'primary', iconRight: 'arrow-right' },
    { label: 'Learn More', href: '#', variant: 'outline' },
  ],
  stats: [
    { icon: 'music', value: '$100M+', label: 'Available for Artists' },
    { icon: 'users', value: 'All Genres', label: 'Independent Artists' },
    { icon: 'globe', value: 'Global', label: 'Catalogs Worldwide' },
  ],
};
