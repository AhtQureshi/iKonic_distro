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
} from '../../components/containers/index.js';

export const metadata = {
  title: 'Ikonic Advance — Turn Your Royalties Into Momentum',
  description: 'Get funding based on your music earnings, not your credit. Keep 100% of your rights and continue to grow your career.',
};

export default function AdvancePage() {
  return (
    <>
      <Header active="advance" />
      <main id="main">
        <AdvanceHero />
        <AdvanceEstimator />
        <AdvanceUses />
        <AdvanceTracking />
        <AdvanceProcess />
        <AdvanceFaq />
        <AdvanceCta />
      </main>
      <Footer />
    </>
  );
}
