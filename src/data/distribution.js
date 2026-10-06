// Distribution page content. Edit copy and numbers here; layouts live in the Distribution* containers.
import { stores as siteStores } from './site.js';

const liveStores = [
  { name: 'Spotify', logo: 'spotify' },
  { name: 'Apple Music', logo: 'apple-music' },
  { name: 'YouTube', logo: 'youtube' },
  { name: 'TikTok', logo: 'tiktok' },
  { name: 'Amazon Music', logo: 'amazon-music' },
];

export const hero = {
  eyebrow: 'Music Without Limits',
  title: 'Distribute Your Music <span class="text-red">Worldwide.</span>',
  text: 'Get your music on 250+ streaming platforms, keep 100% of your rights, and reach new fans everywhere.',
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'Watch Demo', href: '#', variant: 'outline', size: 'lg', iconLeft: 'play-circle' },
  ],
  release: { label: 'New Release', title: 'Higher Ground', artist: 'Nova Rae', tone: 1, status: 'Delivered to 250+ stores' },
  stores: { items: liveStores.map((s) => ({ ...s, status: 'Live' })), more: '+ 245 more stores' },
  streams: { label: 'Total Streams', value: '2,482,391', trend: '+42%', chart: { type: 'bars', values: [28, 44, 62, 80, 100] } },
  points: [
    { icon: 'bolt-outline', title: 'Fast Delivery', text: 'Typically live in 1–7 days' },
    { icon: 'shield', title: '100% Ownership', text: 'You keep your rights' },
    { icon: 'globe', title: '250+ Stores', text: 'Reach every major platform' },
  ],
};

export const storeStrip = {
  label: 'Available on Everywhere',
  stores: [...siteStores, { name: 'pandora' }],
  more: '+ Many More',
};

export const features = {
  items: [
    { icon: 'globe', title: 'Global Distribution', text: 'Get your music on 250+ streaming platforms worldwide.', href: '#', variant: 'plain' },
    { icon: 'bolt-outline', title: 'Fast &amp; Reliable', text: 'Typically live in 1–7 days with real-time delivery updates.', href: '#', variant: 'plain' },
    { icon: 'bar-chart-axis', title: 'Keep 100% Ownership', text: 'You keep your masters, your rights, and your revenue.', href: '#', variant: 'plain' },
    { icon: 'users', title: 'For Artists &amp; Labels', text: 'Release as an independent artist or manage multiple artists under one label.', href: '/labels', variant: 'plain' },
  ],
};

export const audience = {
  eyebrow: 'Reach a Global Audience',
  title: 'Your Music.<br>Everywhere Fans <span class="text-red">Listen.</span>',
  text: 'From Spotify to TikTok, Apple Music to Amazon, Ikonic gets your music in front of listeners across the world — with one simple release.',
  phone: {
    title: 'Higher Ground',
    artist: 'Nova Rae',
    tone: 1,
    live: 'Live on 250+ stores',
    listTitle: 'Distribution Status',
    stores: [
      ...liveStores,
      { name: 'TIDAL', logo: 'tidal' },
      { name: 'Deezer', logo: 'deezer' },
    ].map((s) => ({ ...s, status: 'Delivered' })),
  },
  stats: [
    { icon: 'globe', value: '250+', label: 'Streaming Stores' },
    { icon: 'flag', value: '170+', label: 'Countries' },
    { icon: 'users', value: '1B+', label: 'Potential Listeners' },
    { icon: 'clock', value: '24/7', label: 'Real-Time Analytics' },
  ],
};

export const steps = {
  eyebrow: 'How It Works',
  title: 'Get Your Music <span class="text-red">Live.</span>',
  align: 'center',
  divided: false,
  steps: [
    { icon: 'upload', title: '1. Upload', text: 'Add your music and artwork.' },
    { icon: 'file-text', title: '2. Set Details', text: 'Tell us about your release.' },
    { icon: 'send', title: '3. We Distribute', text: 'We deliver to 250+ stores worldwide.' },
    { icon: 'broadcast', title: '4. Go Live', text: 'Your music is live and ready to stream.' },
    { icon: 'bar-chart-axis', title: '5. Grow', text: 'Track, earn, and reach more fans.' },
  ],
};

export const tools = {
  eyebrow: 'Tools to Help You Grow',
  title: 'More Than Just <span class="text-red">Distribution.</span>',
  text: 'Everything you need to release, manage, and grow your music — all in one place.',
  checklist: [
    'Unlimited Releases',
    'Real-Time Delivery Updates',
    'Pre-Save &amp; Smart Links',
    'ISRC &amp; UPC Support',
    'Release Scheduling',
    'Team Collaboration (Pro+)',
  ],
  action: { label: 'Start Distributing', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
  dashboard: {
    title: 'Releases',
    action: 'Create Release',
    nav: ['Dashboard', 'Releases', 'Analytics', 'Catalog', 'Smart Links', 'Team', 'Royalties', 'Settings'],
    activeNav: 'Releases',
    tabs: ['All', 'Drafts', 'Pending', 'Live'],
    activeTab: 'All',
    stores: ['spotify', 'apple-music', 'tidal', 'youtube'],
    more: '+247',
    status: 'Live',
    rows: [
      { title: 'Higher Ground', artist: 'Nova Rae', date: 'Oct 12, 2024', tone: 1 },
      { title: 'Different Now', artist: 'Jace Miles', date: 'Sep 28, 2024', tone: 8 },
      { title: 'City Lights', artist: 'Tori Vex', date: 'Sep 14, 2024', tone: 5 },
      { title: 'No Limits', artist: 'Dre Ruk', date: 'Aug 30, 2024', tone: 3 },
      { title: 'Lost Files', artist: 'Kali O', date: 'Aug 12, 2024', tone: 4 },
    ],
  },
};

export const releases = {
  eyebrow: 'Recent Releases',
  title: 'Distributed on <span class="text-red">Ikonic.</span>',
  items: [
    { title: 'Higher Ground', artist: 'Nova Rae', tone: 1 },
    { title: 'Different Now', artist: 'Jace Miles', tone: 8 },
    { title: 'City Lights', artist: 'Tori Vex', tone: 3 },
    { title: 'No Limits', artist: 'Dre Ruk', tone: 4 },
    { title: 'Lost Files', artist: 'Kali O', tone: 5 },
    { title: 'Midnight Run', artist: 'The Phase', tone: 7 },
    { title: 'Still Here', artist: 'Raylen', tone: 1 },
    { title: 'One Day', artist: 'Tae Nova', tone: 2 },
  ],
};

export const faq = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Quick <span class="text-red">answers.</span>',
  text: 'Everything you need to know about distribution on Ikonic.',
  items: [
    { question: 'How long does it take to get my music live?', answer: 'Most releases go live within 1–7 days, depending on the store’s review times.' },
    { question: 'Which platforms will my music go to?', answer: 'Your music is delivered to 250+ streaming platforms and stores worldwide, including Spotify, Apple Music, YouTube, TikTok, Amazon Music, TIDAL, Deezer, and Pandora.' },
    { question: 'Do I keep 100% of my rights?', answer: 'Yes — you always keep 100% of your masters, your rights, and your revenue with Ikonic.' },
    { question: 'Can I update my release after it’s live?', answer: 'Yes — you can update your release details anytime, and the changes are pushed out to every store.' },
  ],
};

export const cta = {
  eyebrow: 'Your Next Chapter Starts Here',
  title: 'Release Worldwide.<br><span class="text-red">Build Without Limits.</span>',
  text: 'Join thousands of independent artists releasing, growing, and owning more with Ikonic.',
  actions: [
    { label: 'Start Free', href: '#', variant: 'primary', size: 'lg', iconRight: 'arrow-right' },
    { label: 'View Pricing', href: '/pricing', variant: 'outline', size: 'lg' },
  ],
  stats: [
    { value: '50K+', label: 'Artists &amp; Labels' },
    { value: '500M+', label: 'Streams Distributed' },
    { value: '$100M+', label: 'Paid to Artists' },
  ],
};
