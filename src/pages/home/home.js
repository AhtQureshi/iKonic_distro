// Home page: composed only from containers. Content lives in src/data/home.js.
import {
  CtaBanner,
  FeatureGrid,
  Footer,
  GlobalReach,
  Header,
  Hero,
  Journey,
  LatestReleases,
  PlatformShowcase,
  PricingPreview,
  Ticker,
  setupHeader,
  setupLatestReleases,
} from '../../components/containers/index.js';
import { setupMotion } from '../../utils/motion.js';

const app = document.getElementById('app');

app.innerHTML = [
  Header(),
  '<main id="main">',
  Hero(),
  Ticker(),
  PlatformShowcase(),
  FeatureGrid(),
  LatestReleases(),
  Journey(),
  GlobalReach(),
  PricingPreview(),
  CtaBanner(),
  '</main>',
  Footer(),
].join('');

setupHeader(app);
setupLatestReleases(app);
setupMotion(app);
