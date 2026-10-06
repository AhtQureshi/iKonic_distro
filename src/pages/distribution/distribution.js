// Distribution page: composed only from containers. Content lives in src/data/distribution.js.
import {
  DistributionAudience,
  DistributionCta,
  DistributionFaq,
  DistributionHero,
  DistributionStores,
  DistributionTools,
  FeatureGrid,
  Footer,
  Header,
  Journey,
  LatestReleases,
  setupDistributionFaq,
  setupHeader,
  setupLatestReleases,
} from '../../components/containers/index.js';
import { features, releases, steps } from '../../data/distribution.js';
import { setupMotion } from '../../utils/motion.js';

const app = document.getElementById('app');

app.innerHTML = [
  Header({ active: 'distribution' }),
  '<main id="main">',
  DistributionHero(),
  DistributionStores(),
  FeatureGrid(features),
  DistributionAudience(),
  Journey(steps),
  DistributionTools(),
  LatestReleases(releases),
  DistributionFaq(),
  DistributionCta(),
  '</main>',
  Footer(),
].join('');

setupHeader(app);
setupLatestReleases(app);
setupDistributionFaq(app);
setupMotion(app);
