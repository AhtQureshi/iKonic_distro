// Home page content. Edit copy and numbers here; layouts live in the containers.
import { planPrices } from './site.js';

export const hero = {
  eyebrow: 'Artists Own More Here',
  title: 'Own More<br>Of <span class="text-red">Your Music.</span>',
  text: 'Distribution. Publishing. Funding. Everything independent artists need — all in one platform.',
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'Watch Demo', href: '#', variant: 'outline', size: 'lg', iconLeft: 'play-circle' },
  ],
  image: { file: 'hero-studio.png', alt: 'IKONIC artist in the studio' },
  release: { title: 'Higher Ground', artist: 'Nova Rae', tone: 1, stores: ['spotify', 'apple-music', 'youtube', 'tiktok'], extra: '+6' },
  advance: { label: 'Advance Approved', value: '$50,000', icon: 'bolt' },
  streams: { label: 'Total Streams', value: '2,483,921', trend: '+12.4%', chart: { type: 'bars', values: [30, 48, 40, 62, 55, 80, 100] } },
  earnings: { label: 'Monthly Earnings', value: '$8,432', trend: '+29%', chart: { type: 'spark', values: [12, 18, 14, 22, 19, 28, 24, 34, 31, 42] } },
};

export const ticker = {
  title: "What's New on Ikonic:",
  items: [
    'New: Catalog Funding',
    'New: AI Metadata Assistant',
    'New: Publishing Dashboard',
    'New: Team Accounts',
    'New: Faster Royalty Withdrawals',
  ],
};

export const platform = {
  eyebrow: 'The Complete Platform',
  title: 'One Dashboard.<br>Every Opportunity.',
  text: 'Manage your releases, publishing, royalties, funding, team, and analytics — all in one place.',
  action: { label: 'Explore Platform', href: '#', iconRight: 'arrow-right' },
  dashboard: {
    user: 'Nova Rae',
    nav: [
      { label: 'Dashboard', icon: 'dashboard', active: true },
      { label: 'Releases', icon: 'disc' },
      { label: 'Analytics', icon: 'analytics' },
      { label: 'Publishing', icon: 'music' },
      { label: 'Royalties', icon: 'dollar-circle' },
      { label: 'Advance', icon: 'bolt' },
      { label: 'Team', icon: 'users' },
      { label: 'Payouts', icon: 'wallet' },
      { label: 'Catalog', icon: 'database' },
      { label: 'Settings', icon: 'settings' },
    ],
    stats: [
      { label: 'Total Streams', value: '2.4M', trend: '+12.4%', chart: { type: 'bars', values: [35, 50, 42, 66, 58, 100] } },
      { label: 'Total Earnings', value: '$8,432', trend: '+29%', chart: { type: 'spark', values: [10, 16, 13, 22, 20, 30] } },
      { label: 'Active Releases', value: '12', trend: '+2' },
    ],
    chart: {
      values: [30, 34, 31, 42, 38, 47, 44, 52, 49, 58, 54, 66, 60, 72, 64, 70, 61, 76, 70, 82],
      ranges: ['7D', '30D', '3M', '1Y'],
      activeRange: '30D',
      tooltip: { value: '245,820', date: 'Sep 12, 2026', x: 60, y: 52 },
      labels: ['Aug 1', 'Aug 15', 'Sep 1', 'Sep 15', 'Oct 1'],
    },
    releases: [
      { title: 'Higher Ground', artist: 'Nova Rae', tone: 1 },
      { title: 'Different Now', artist: 'Jace Miles', tone: 2 },
      { title: 'City Lights', artist: 'Tori Vex', tone: 3 },
      { title: 'No Limits', artist: 'Dre Ruk', tone: 7 },
    ],
  },
};

export const features = {
  eyebrow: 'Built For Independent Artists',
  title: 'More Than Distribution.',
  items: [
    { icon: 'globe', title: 'Distribution', text: 'Get your music on 250+ stores worldwide.', href: '/distribution' },
    { icon: 'music', title: 'Publishing', text: 'Collect more from your songs.', href: '/publishing' },
    { icon: 'coins', title: 'Advance', text: 'Turn your royalties into momentum.', href: '/advance' },
    { icon: 'chart-bar', art: 'growth', title: 'Analytics', text: 'Real insights. Real growth.', href: '#' },
  ],
};

export const releases = {
  eyebrow: 'Real Music. Real Artists.',
  title: 'Latest Releases on Ikonic.',
  filters: [
    { label: 'All', value: 'all' },
    { label: 'Albums', value: 'album' },
    { label: 'Singles', value: 'single' },
  ],
  items: [
    { title: 'Higher Ground', artist: 'Nova Rae', tone: 1, type: 'single' },
    { title: 'Different Now', artist: 'Jace Miles', tone: 2, type: 'album' },
    { title: 'City Lights', artist: 'Tori Vex', tone: 3, type: 'single' },
    { title: 'No Limits', artist: 'Dre Ruk', tone: 4, type: 'album' },
    { title: 'Lost Files', artist: 'Kali O', tone: 5, type: 'single' },
    { title: 'Midnight Run', artist: 'The Phase', tone: 6, type: 'album' },
    { title: 'Still Here', artist: 'Raylen', tone: 7, type: 'single' },
    { title: 'Golden Hour', artist: 'Amari J', tone: 8, type: 'album' },
    { title: 'Afterglow', artist: 'Sienna Cole', tone: 1, type: 'single' },
  ],
};

export const journey = {
  eyebrow: 'Your Journey',
  title: 'From Song to Success.',
  steps: [
    { icon: 'mic', title: 'Record', text: 'Create your music.' },
    { icon: 'upload', title: 'Upload', text: 'Submit your release.' },
    { icon: 'globe', title: 'Release', text: 'Distribute worldwide.' },
    { icon: 'dollar-circle', title: 'Earn', text: 'Collect your royalties.' },
    { icon: 'growth', title: 'Grow', text: 'Build a bigger future.' },
  ],
};

export const reach = {
  eyebrow: 'Global Reach',
  title: 'Your Music<br>Worldwide.',
  text: 'Reach fans in 170+ countries across 250+ streaming and download stores.',
  stats: [
    { icon: 'globe', value: '170+', label: 'Countries' },
    { icon: 'coins', value: '250+', label: 'Stores' },
  ],
  map: {
    hub: { lon: -74, lat: 40.7 },
    hotspots: [
      { lon: -118, lat: 34, size: 2 },
      { lon: -87.6, lat: 41.9, size: 1 },
      { lon: -79.4, lat: 43.7, size: 2 },
      { lon: -0.1, lat: 51.5, size: 3 },
      { lon: 13.4, lat: 52.5, size: 2 },
      { lon: 2.35, lat: 48.85, size: 2 },
      { lon: 3.4, lat: 6.5, size: 2 },
      { lon: -46.6, lat: -23.5, size: 2 },
      { lon: -99.1, lat: 19.4, size: 1 },
      { lon: 151.2, lat: -33.9, size: 1 },
      { lon: 139.7, lat: 35.7, size: 1 },
      { lon: 77.2, lat: 28.6, size: 1 },
      { lon: 28, lat: -26.2, size: 1 },
      { lon: -122.4, lat: 37.8, size: 1 },
      { lon: -95.4, lat: 29.8, size: 1 },
      { lon: -84.4, lat: 33.7, size: 2 },
      { lon: -80.2, lat: 25.8, size: 1 },
      { lon: -3.7, lat: 40.4, size: 1 },
      { lon: 12.5, lat: 41.9, size: 1 },
      { lon: 4.9, lat: 52.4, size: 1 },
      { lon: 18.1, lat: 59.3, size: 1 },
      { lon: 36.8, lat: -1.3, size: 1 },
      { lon: 31.2, lat: 30, size: 1 },
      { lon: 55.3, lat: 25.2, size: 1 },
      { lon: 72.9, lat: 19.1, size: 1 },
      { lon: 103.8, lat: 1.35, size: 1 },
      { lon: 126.98, lat: 37.6, size: 1 },
      { lon: -58.4, lat: -34.6, size: 1 },
      { lon: -74.1, lat: 4.7, size: 1 },
    ],
  },
  countries: [
    { code: 'us', name: 'United States', value: '1.2M' },
    { code: 'gb', name: 'United Kingdom', value: '442K' },
    { code: 'de', name: 'Germany', value: '384K' },
    { code: 'ca', name: 'Canada', value: '321K' },
    { code: 'fr', name: 'France', value: '298K' },
    { code: 'br', name: 'Brazil', value: '271K' },
    { code: 'au', name: 'Australia', value: '198K' },
    { code: 'mx', name: 'Mexico', value: '176K' },
  ],
};

export const pricing = {
  eyebrow: 'Simple Pricing',
  title: 'Plans for Every<br>Stage.',
  text: 'Start free, upgrade when you grow. Keep 100% of your rights on every plan.',
  link: { label: 'See All Plans', href: '/pricing' },
  plans: [
    { name: 'Ikonic Basic', price: planPrices.basic.monthly, features: ['Worldwide distribution', 'Keep 100% of your rights', 'Basic analytics'] },
    { name: 'Ikonic Pro', price: planPrices.pro.monthly, featured: true, badge: 'Most Popular', features: ['Everything in Basic', 'Advanced analytics', 'Priority support'] },
    { name: 'Ikonic Pro+', price: planPrices.proPlus.monthly, features: ['Everything in Pro', 'Advance eligibility', 'Team accounts'] },
  ],
};

export const cta = {
  eyebrow: 'The Next Generation Builds Here',
  title: 'Own More. <span class="text-red">Build Bigger.</span>',
  text: 'Join thousands of independent artists using Ikonic to take control of their music business.',
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'View Pricing', href: '/pricing', variant: 'outline', size: 'lg' },
  ],
  proof: { avatars: [1, 5, 3, 7], value: '50K+', label: 'Artists & Labels' },
};
