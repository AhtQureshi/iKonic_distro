// "For Labels" page: composed only from containers. Content lives in src/data/labels.js.
import {
  Footer,
  Header,
  LabelsCta,
  LabelsDashboard,
  LabelsFaq,
  LabelsFeatures,
  LabelsHero,
  LabelsRoles,
  LabelsSteps,
  setupHeader,
  setupLabelsFaq,
} from '../../components/containers/index.js';
import { setupMotion } from '../../utils/motion.js';

const app = document.getElementById('app');

app.innerHTML = [
  Header({ active: 'labels' }),
  '<main id="main">',
  LabelsHero(),
  LabelsFeatures(),
  LabelsDashboard(),
  LabelsRoles(),
  LabelsSteps(),
  LabelsFaq(),
  LabelsCta(),
  '</main>',
  Footer(),
].join('');

setupHeader(app);
setupLabelsFaq(app);
setupMotion(app);
