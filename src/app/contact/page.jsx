// Contact / Support page: composed only from containers. Content lives in src/data/contact.js.
import {
  ContactFaq,
  ContactHero,
  ContactSupport,
  CtaBanner,
  Footer,
  Header,
} from '../../components/containers/index.js';
import { cta } from '../../data/contact.js';

export const metadata = {
  title: 'Support & FAQ — IKONIC',
  description: 'Get answers, learn how to use Ikonic, and contact our support team about distribution, publishing, payouts and more.',
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main id="main">
        <ContactHero />
        <ContactFaq />
        <ContactSupport />
        <CtaBanner content={cta} />
      </main>
      <Footer />
    </>
  );
}
