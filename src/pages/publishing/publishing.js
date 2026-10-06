// Publishing page: composed only from containers. Content lives in src/data/publishing.js.
import {
  Footer,
  Header,
  PublishingCta,
  PublishingDashboard,
  PublishingEarn,
  PublishingFaq,
  PublishingHero,
  PublishingHighlights,
  PublishingNetwork,
  PublishingPartners,
  PublishingSteps,
  setupHeader,
  setupPublishingFaq,
} from '../../components/containers/index.js';
import { setupMotion } from '../../utils/motion.js';

const app = document.getElementById('app');

app.innerHTML = [
  Header({ active: 'publishing' }),
  '<main id="main">',
  PublishingHero(),
  PublishingHighlights(),
  PublishingSteps(),
  PublishingEarn(),
  PublishingDashboard(),
  PublishingNetwork(),
  PublishingPartners(),
  PublishingFaq(),
  PublishingCta(),
  '</main>',
  Footer(),
].join('');

setupHeader(app);
setupPublishingFaq(app);
setupMotion(app);
