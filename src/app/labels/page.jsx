// For Labels page: composed only from containers. Content lives in src/data/labels.js.
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
} from '../../components/containers/index.js';

export const metadata = {
  title: 'For Labels — IKONIC',
  description: 'Manage multiple artist accounts, assign roles and permissions, manage releases and track earnings across your whole roster with IKONIC for Labels.',
};

export default function LabelsPage() {
  return (
    <>
      <Header active="labels" />
      <main id="main">
        <LabelsHero />
        <LabelsFeatures />
        <LabelsDashboard />
        <LabelsRoles />
        <LabelsSteps />
        <LabelsFaq />
        <LabelsCta />
      </main>
      <Footer />
    </>
  );
}
