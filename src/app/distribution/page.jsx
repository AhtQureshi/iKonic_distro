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
} from '../../components/containers/index.js';
import { features, releases, steps } from '../../data/distribution.js';

export const metadata = {
  title: 'Distribution — Ikonic Distro',
  description: 'Distribute your music worldwide. Get your music on 250+ streaming platforms, keep 100% ownership of your music, and reach new fans everywhere.',
};

export default function DistributionPage() {
  return (
    <>
      <Header active="distribution" />
      <main id="main">
        <DistributionHero />
        <DistributionStores />
        <FeatureGrid content={features} />
        <DistributionAudience />
        <Journey content={steps} />
        <DistributionTools />
        <LatestReleases content={releases} />
        <DistributionFaq />
        <DistributionCta />
      </main>
      <Footer />
    </>
  );
}
