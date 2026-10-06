import { hero } from '../../../data/contact.js';
import { Eyebrow, Heading, Text } from '../../atoms/index.js';
import { ContactForm, IconPoint } from '../../subcomponents/index.js';

/** Contact page intro: headline and reassurance points on the left, the contact form on the right. */
export function ContactHero({ content = hero }) {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="container contact-hero__grid">
        <div className="contact-hero__copy" data-reveal-stagger="up" data-reveal-step="110">
          <Eyebrow text={content.eyebrow} className="contact-hero__eyebrow" />
          <Heading text={content.title} level={1} size="h1" id="contact-hero-title" className="contact-hero__title" />
          <Text text={content.text} size="lg" className="contact-hero__text" />
          <ul className="contact-hero__points">
            {content.points.map((p) => <li key={p.text}><IconPoint icon={p.icon} text={p.text} /></li>)}
          </ul>
        </div>
        <div className="contact-hero__form" data-reveal="up" data-reveal-delay="250">
          <ContactForm content={content.form} />
        </div>
      </div>
    </section>
  );
}
