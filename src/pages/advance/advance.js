// Advance page: composed only from containers. Content lives in src/data/advance.js.
import {
  AdvanceCta,
  AdvanceEstimator,
  AdvanceFaq,
  AdvanceHero,
  AdvanceProcess,
  AdvanceTracking,
  AdvanceUses,
  Footer,
  Header,
  setupAdvanceEstimator,
  setupAdvanceFaq,
  setupHeader,
} from '../../components/containers/index.js';
import { setupMotion } from '../../utils/motion.js';

const app = document.getElementById('app');

app.innerHTML = [
  Header({ active: 'advance' }),
  '<main id="main">',
  AdvanceHero(),
  AdvanceEstimator(),
  AdvanceUses(),
  AdvanceTracking(),
  AdvanceProcess(),
  AdvanceFaq(),
  AdvanceCta(),
  '</main>',
  Footer(),
].join('');

setupHeader(app);
setupAdvanceEstimator(app);
setupAdvanceFaq(app);
setupMotion(app);
