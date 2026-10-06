// "For Labels" page content. Edit copy and numbers here; layouts live in the Labels* containers.

const getStarted = { label: 'Get Started', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' };

export const labelsHero = {
  eyebrow: 'For Labels &amp; Teams',
  title: 'Manage Your Artists. <span class="text-red">All In One Place.</span>',
  text: 'Create multiple artist accounts, assign roles, manage releases, track earnings, and grow your entire roster from one powerful platform.',
  actions: [
    getStarted,
    { label: 'Watch Demo', variant: 'outline', size: 'lg', iconLeft: 'play-circle' },
  ],
  summary: {
    name: 'Your Label',
    stats: [
      { value: '12', label: 'Artists' },
      { value: '28', label: 'Releases' },
      { value: '4.2M', label: 'Total Streams' },
      { value: '$48,320', label: 'Total Earnings' },
    ],
    avatars: [7, 8, 3, 4, 6],
    more: '+8',
  },
  bullets: [
    { icon: 'artists', text: 'Manage Multiple Artist Accounts' },
    { icon: 'shield-check', text: 'Custom Roles and Permissions' },
    { icon: 'bars', text: 'Track Earnings Across Your Roster' },
    { icon: 'team', text: 'Built for Labels, Managers &amp; Teams' },
  ],
};

export const labelsFeatures = {
  eyebrow: 'Built for Growth',
  title: 'Everything Your Label Needs.',
  text: 'From signing new talent to releasing music and tracking revenue &mdash; manage your entire operation in one place.',
  action: getStarted,
  items: [
    { icon: 'artists', title: 'Multiple Artist Accounts', text: 'Create and manage unlimited artist profiles under one label account.' },
    { icon: 'shield-check', title: 'Role-Based Access', text: 'Assign custom roles and permissions to your team members.' },
    { icon: 'cube', title: 'Release Management', text: 'Approve, schedule, and manage releases for all artists.' },
    { icon: 'bars', title: 'Revenue Tracking', text: 'View earnings across your entire roster in real time.' },
    { icon: 'team', title: 'Team Collaboration', text: 'Invite your team, collaborate, and keep everything organized.' },
    { icon: 'settings', title: 'Custom Settings', text: 'Set permissions, workflows, and approval processes that fit your label.' },
  ],
};

export const labelsDashboard = {
  eyebrow: 'Your Label Dashboard',
  title: 'Complete Control at a Glance.',
  text: 'See your artists, releases, earnings, and team activity all in one dashboard.',
  checklist: [
    'Overview of all artists and releases',
    'Real-time streaming and revenue data',
    'Approval workflows',
    'Team activity and access logs',
    'Quick actions and insights',
  ],
  action: { label: 'Explore the Platform', href: '#', variant: 'outline', size: 'lg', iconRight: 'arrow-right' },
  mockup: {
    title: 'Label Overview',
    range: 'Last 30 Days',
    nav: [
      { label: 'Dashboard', icon: 'dashboard', active: true },
      { label: 'Artists', icon: 'user' },
      { label: 'Releases', icon: 'disc' },
      { label: 'Analytics', icon: 'bars' },
      { label: 'Publishing', icon: 'cube' },
      { label: 'Advance', icon: 'dollar' },
      { label: 'Royalties', icon: 'list' },
      { label: 'Team', icon: 'user' },
      { label: 'Settings', icon: 'settings' },
    ],
    stats: [
      { value: '12', label: 'Artists', trend: '+3 this month' },
      { value: '28', label: 'Releases', trend: '+5 this month' },
      { value: '4.2M', label: 'Total Streams', trend: '+28%' },
      { value: '$48,320', label: 'Total Earnings', trend: '+41%' },
    ],
    // Streams over the period (0-130 scale, matches the chart height)
    chart: [35, 42, 38, 60, 54, 75, 68, 82, 72, 90, 78, 95, 82, 70, 88, 75, 92, 78, 86, 70, 80, 62, 72, 58, 66],
    artistsTitle: 'Your Artists',
    artists: [
      { name: 'Nova Rae', meta: 'Artist &bull; 8 Releases', tone: 7 },
      { name: 'Jace Miles', meta: 'Artist &bull; 5 Releases', tone: 8 },
      { name: 'Tori Vex', meta: 'Artist &bull; 4 Releases', tone: 3 },
      { name: 'Dre Ruk', meta: 'Artist &bull; 6 Releases', tone: 4 },
    ],
  },
};

export const labelsRoles = {
  eyebrow: 'Team Roles &amp; Permissions',
  title: 'Give the Right Access to the Right People.',
  text: 'Assign roles based on responsibility and keep your team, artists, and label organized.',
  action: { label: 'View All Roles', href: '#', variant: 'outline', size: 'lg', iconRight: 'arrow-right' },
  items: [
    { icon: 'crown', title: 'Owner', text: 'Full access to everything.' },
    { icon: 'settings', title: 'Admin', text: 'Manage artists, releases, and team members.' },
    { icon: 'user', title: 'Artist', text: 'Access to their own profile, releases, and analytics.' },
    { icon: 'search', title: 'A&amp;R', text: 'Discover and manage talent, approve releases.' },
    { icon: 'megaphone', title: 'Marketing', text: 'Access to promotion tools and analytics.' },
    { icon: 'dollar-circle', title: 'Finance', text: 'View revenue, payouts, and financial reports.' },
    { icon: 'headset', title: 'Support', text: 'Handle support and communication.' },
    { icon: 'plus', title: 'Custom', text: 'Create custom roles with specific permissions.' },
  ],
};

export const labelsSteps = {
  eyebrow: 'How It Works',
  title: 'Get Your Team Running in Minutes.',
  text: 'Set up your label, add your artists, invite your team, and start releasing.',
  action: getStarted,
  steps: [
    { title: 'Create Your Label', text: 'Set up your label account and profile.' },
    { title: 'Add Artists', text: 'Create artist accounts and assign access.' },
    { title: 'Invite Your Team', text: 'Assign roles and permissions.' },
    { title: 'Start Releasing', text: 'Manage releases and grow your roster.' },
  ],
};

export const labelsFaq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Quick answers.',
  text: 'Everything you need to know about labels and team management on Ikonic.',
  action: { label: 'View All FAQs', href: 'support.html', variant: 'outline', size: 'lg', iconRight: 'arrow-right' },
  items: [
    { question: 'How many artists can I add to my label account?', answer: 'You can create and manage unlimited artist accounts under your label.' },
    { question: 'Can I assign different permissions to my team?', answer: 'Yes, you can assign custom roles and permissions so each team member only accesses what they need.' },
    { question: 'Can artists have their own login under my label?', answer: 'Yes, each artist gets their own login with access limited to their profile, releases, and analytics.' },
    { question: 'Can I view all earnings in one place?', answer: 'Yes, you can track streaming and revenue data across your entire roster in real time from one dashboard.' },
  ],
};

export const labelsCta = {
  eyebrow: 'Built for the Next Generation',
  title: 'Build Your Label. <span class="text-red">Go Further.</span>',
  text: 'More artists. More releases. More opportunities &mdash; all in one place.',
  actions: [
    getStarted,
    { label: 'View Pricing', href: 'pricing.html', variant: 'outline', size: 'lg' },
  ],
  stats: [
    { icon: 'music', value: '50K+', label: 'Artists &amp; Labels' },
    { icon: 'bars', value: '500M+', label: 'Streams Distributed' },
    { icon: 'globe', value: '170+', label: 'Countries' },
  ],
};
