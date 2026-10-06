import { image } from '../../../utils/assets.js';
import { hero } from '../../../data/contact.js';
import { Eyebrow, Heading, Img, Text } from '../../atoms/index.js';
import { FeatureCard } from '../../subcomponents/index.js';

/** Support page intro over a full-bleed banner: headline, then four help cards (Help Center, Tutorials, Community, Contact). */
export function ContactHero({ content = hero }) {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      {content.image && (
        <div className="contact-hero__media" aria-hidden="true">
          {/* Not `eager`: React would add a preload hint that other pages pick up when they prefetch /contact. */}
          <Img src={image(content.image.file)} width={content.image.width} height={content.image.height} className="contact-hero__bg" />
        </div>
      )}
      <div className="container">
        <div className="contact-hero__copy" data-reveal-stagger="up" data-reveal-step="110">
          <Eyebrow text={content.eyebrow} className="contact-hero__eyebrow" />
          <Heading text={content.title} level={1} size="h1" id="contact-hero-title" className="contact-hero__title" />
          <Text text={content.text} size="lg" className="contact-hero__text" />
        </div>
        <div className="contact-hero__cards" data-reveal-stagger="up" data-reveal-delay="300" data-reveal-step="100">
          {content.cards.map((c) => <FeatureCard key={c.title} {...c} variant="plain" className="contact-hero__card" />)}
        </div>
      </div>
    </section>
  );
}
