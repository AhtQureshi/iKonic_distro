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
} from '../components/containers/index.js';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <PlatformShowcase />
        <FeatureGrid />
        <LatestReleases />
        <Journey />
        <GlobalReach />
        <PricingPreview />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
