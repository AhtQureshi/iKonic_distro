// Advance page: composed only from containers. Content lives in src/data/advance.js.
import {
  AdvanceCta,
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
  description: 'Pro+ and Label Enterprise members can apply for Ikonic Advance. Every application is reviewed by our funding partner. Keep 100% ownership of your music.',
};

export default function AdvancePage() {
  return (
    <>
      <Header active="advance" />
      <main id="main">
        <AdvanceHero />
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
