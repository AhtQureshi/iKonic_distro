import { Archivo, Caveat } from 'next/font/google';
import { MotionObserver } from './MotionObserver.jsx';
import { MOTION_BOOT_SCRIPT } from '../utils/motion.js';
import '../styles/index.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
  display: 'swap',
});

// Handwritten note in the pricing hero only, so it isn't preloaded on every page.
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
  display: 'swap',
  preload: false,
});

export const metadata = {
  title: 'IKONIC — Own More Of Your Music.',
  description: 'Distribution, publishing and funding for independent artists. Get your music on 250+ stores in 170+ countries and keep 100% of your rights.',
  icons: { icon: { url: '/assets/svgs/brand/favicon.svg', type: 'image/svg+xml' } },
};

export const viewport = {
  themeColor: '#0a0a0b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT_SCRIPT }} />
      </head>
      <body>
        {children}
        <MotionObserver />
      </body>
    </html>
  );
}
