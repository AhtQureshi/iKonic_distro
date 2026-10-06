// Contact page: composed only from containers. Content lives in src/data/contact.js.
import {
  ContactChannels,
  ContactHero,
  CtaBanner,
  Footer,
  Header,
  PricingFaq,
} from '../../components/containers/index.js';
import { cta, faq } from '../../data/contact.js';

export const metadata = {
  title: 'Contact Us — IKONIC',
  description: 'Get in touch with the IKONIC team about distribution, publishing, funding or label accounts. We reply within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main id="main">
        <ContactHero />
        <ContactChannels />
        <PricingFaq content={faq} />
        <CtaBanner content={cta} />
      </main>
      <Footer />
    </>
  );
}
