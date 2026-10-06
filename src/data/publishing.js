// Publishing page content. Edit copy and numbers here; layouts live in the Publishing* containers.

export const hero = {
  eyebrow: 'Music Publishing',
  title: 'Turn Songs Into <span class="text-red">Long-Term Income.</span>',
  text: 'Register your songs, collect publishing royalties worldwide, manage splits, and track earnings — all in one place.',
  actions: [
    { label: 'Get Started', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'Watch Demo', href: '#', variant: 'outline', size: 'lg', iconLeft: 'play-circle' },
  ],
  royalties: {
    title: 'Publishing Royalties',
    rows: [
      { label: 'Performance', value: '$4,232', percent: 76 },
      { label: 'Mechanical', value: '$2,941', percent: 53 },
      { label: 'Sync', value: '$1,203', percent: 34 },
      { label: 'Global', value: '8892', percent: 20 },
    ],
  },
};

export const highlights = [
  { icon: 'music', text: 'Collect Global Publishing Royalties' },
  { icon: 'users', text: 'Easy Split Management' },
  { icon: 'stat-bars', text: 'Track Performance in Real-Time' },
  { icon: 'shield-check', text: 'You Keep 100% of Your Rights' },
];

export const steps = {
  eyebrow: 'How It Works',
  title: 'You Create.<br>We Help You Collect.',
  text: 'We handle the registration and tracking, so you can focus on making music.',
  action: { label: 'Get Started', href: '#', size: 'lg', iconRight: 'arrow-right' },
  items: [
    { icon: 'file-text', title: 'Register', text: 'Add your songs and song details.' },
    { icon: 'globe', title: 'We Submit', text: 'We register with collecting societies worldwide.' },
    { icon: 'dollar-circle', title: 'You Collect', text: 'Earn publishing royalties from radio, streaming, sync, and more.' },
    { icon: 'stat-bars', title: 'Track &amp; Grow', text: 'See your earnings in real-time and keep 100% of your rights.' },
  ],
};

export const earn = {
  eyebrow: 'Multiple Ways to Earn',
  title: 'Your Music Earns Everywhere.',
  text: 'Collect publishing royalties from multiple income sources around the world.',
  items: [
    { icon: 'target', title: 'Streaming', text: 'Royalties from plays on streaming platforms.' },
    { icon: 'broadcast', title: 'Radio &amp; TV', text: 'Earnings from airplay on radio and television.' },
    { icon: 'mic', title: 'Live Performance', text: 'Get paid when your music is performed live.' },
    { icon: 'crosshair', title: 'Mechanical', text: 'Royalties from downloads and physical sales.' },
    { icon: 'monitor-check', title: 'Sync Licensing', text: 'Earnings from TV, films, ads, and games.' },
    { icon: 'globe', title: 'International', text: 'Collected worldwide through our global network of societies.' },
  ],
};

export const dashboard = {
  eyebrow: "Built for Today's Artists",
  title: 'Manage Your Publishing in One Place.',
  text: 'Track earnings, view data, manage splits, and see which songs are generating the most revenue — all from your Ikonic dashboard.',
  action: { label: 'Explore the Platform', href: '#', size: 'lg', iconRight: 'arrow-right' },
  mockup: {
    title: 'Publishing Overview',
    range: 'Last 12 Months',
    nav: [
      { label: 'Dashboard', icon: 'dashboard' },
      { label: 'Catalog', icon: 'book' },
      { label: 'Publishing', icon: 'music', active: true },
      { label: 'Royalties', icon: 'dollar-circle' },
      { label: 'Splits', icon: 'splits' },
      { label: 'Analytics', icon: 'stat-bars' },
      { label: 'Statements', icon: 'file-text' },
      { label: 'Settings', icon: 'settings' },
    ],
    stats: [
      { label: 'Total Earnings', value: '$8,432', trend: '24%' },
      { label: 'Total Songs', value: '48', trend: '12%' },
    ],
    top: { label: 'Top Performing', title: 'Higher Ground', tone: 1 },
    chart: {
      tooltip: { value: '$1,243', label: 'daily 2026' },
      values: [34, 52, 40, 64, 46, 70, 55, 82, 95, 66, 74, 58, 86, 48, 62, 77, 44, 69, 52, 80, 60, 88, 56, 72],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    songsTitle: 'Top Songs',
    songs: [
      { title: 'Higher Ground', meta: '2:59 • R&amp;B', value: '$2,932', trend: '29%', tone: 1 },
      { title: 'City Lights', meta: '3:21 • Pop', value: '$1,645', trend: '21%', tone: 2 },
      { title: 'No Limits', meta: '2:47 • Hip-Hop', value: '$1,203', trend: '18%', tone: 3 },
    ],
  },
};

export const network = {
  eyebrow: 'Global Publishing Network',
  title: 'Connected Worldwide.',
  text: 'We work with collecting societies in 170+ countries to make sure you get paid everywhere your music is played.',
  action: { label: 'View All Territories', href: '#', variant: 'outline', size: 'lg', iconRight: 'arrow-right' },
  stats: [
    { icon: 'globe', value: '170+', label: 'Countries' },
    { icon: 'users', value: '100+', label: 'Collecting Societies' },
    { icon: 'music', value: 'Millions', label: 'Revenue Opportunities' },
  ],
};

export const partners = {
  eyebrow: 'Our Global Partners',
  title: 'Trusted. Connected. Worldwide.',
  text: 'We work with major collecting societies to ensure your publishing royalties are collected globally.',
  items: [
    { name: 'ASCAP', region: 'USA' },
    { name: 'BMI', region: 'USA' },
    { name: 'SESAC', region: 'USA' },
    { name: 'PRS', region: 'UK' },
    { name: 'GEMA', region: 'Germany' },
    { name: 'SACEM', region: 'France' },
    { name: 'SOCAN', region: 'Canada' },
    { name: 'APRA AMCOS', region: 'Australia' },
    { name: 'JASRAC', region: 'Japan' },
    { name: '+ MORE', region: 'Worldwide', highlight: true },
  ],
};

export const faq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Quick answers.',
  text: 'Everything you need to know about publishing on Ikonic.',
  items: [
    { question: 'Do I keep 100% of my rights?', answer: 'Yes — you keep full ownership of your songs; Ikonic only collects the publishing royalties on your behalf.' },
    { question: 'What songs can I register?', answer: 'Any original songs you wrote or co-wrote and hold the publishing rights to, including released and unreleased works.' },
    { question: 'How and when do I get paid?', answer: 'Royalties are collected from societies worldwide and added to your Ikonic balance, which you can withdraw once it reaches the payout threshold.' },
    { question: 'Which countries are included?', answer: 'Our network covers 170+ countries through collecting societies worldwide, so you are covered almost everywhere your music is played.' },
  ],
};

export const cta = {
  eyebrow: 'Your Songs. A Bigger Future.',
  title: 'Build Long-Term Income With Your Music.',
  text: 'Join thousands of independent artists collecting publishing royalties and owning more of their music.',
  actions: [
    { label: 'Get Started', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'View Pricing', href: '/pricing', variant: 'outline', size: 'lg' },
  ],
};
