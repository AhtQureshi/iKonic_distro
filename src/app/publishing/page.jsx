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
} from '../../components/containers/index.js';

export const metadata = {
  title: 'Publishing | IKONIC',
  description: 'Register your songs, collect publishing royalties worldwide, manage splits, and track earnings — all in one place.',
};

export default function PublishingPage() {
  return (
    <>
      <Header active="publishing" />
      <main id="main">
        <PublishingHero />
        <PublishingHighlights />
        <PublishingSteps />
        <PublishingEarn />
        <PublishingDashboard />
        <PublishingNetwork />
        <PublishingPartners />
        <PublishingFaq />
        <PublishingCta />
      </main>
      <Footer />
    </>
  );
}
