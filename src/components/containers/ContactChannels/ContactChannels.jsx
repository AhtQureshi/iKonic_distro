import { channels } from '../../../data/contact.js';
import { FeatureCard, SectionHeading } from '../../subcomponents/index.js';

/** "Talk to the Right Team." — one email card per team, using the plain FeatureCard. */
export function ContactChannels({ content = channels }) {
  return (
    <section className="section section--divided contact-channels">
      <div className="container">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} className="contact-channels__heading" />
        <div className="contact-channels__grid" data-reveal-stagger="up" data-reveal-step="110">
          {content.items.map((item) => <FeatureCard key={item.title} {...item} variant="plain" />)}
        </div>
      </div>
    </section>
  );
}
