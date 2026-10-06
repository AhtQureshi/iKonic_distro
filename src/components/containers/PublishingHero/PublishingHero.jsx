import { hero } from '../../../data/publishing.js';
import { Button, Eyebrow, Heading, Text } from '../../atoms/index.js';
import { RoyaltyBreakdown } from '../../subcomponents/index.js';

/** Publishing hero: headline + CTAs over a red glow, with the royalty breakdown card on the right. */
export function PublishingHero({ content = hero }) {
  return (
    <section className="publishing-hero" aria-labelledby="publishing-hero-title">
      <div className="container publishing-hero__inner">
        <div className="publishing-hero__copy" data-reveal-stagger="up" data-reveal-step="120">
          <Eyebrow text={content.eyebrow} />
          <Heading text={content.title} level={1} size="h1" id="publishing-hero-title" />
          <Text text={content.text} size="lg" className="publishing-hero__text" />
          <div className="publishing-hero__actions">{content.actions.map((a) => <Button key={a.label} {...a} />)}</div>
        </div>
        <div className="publishing-hero__card" data-reveal="zoom" data-reveal-delay="400">
          <RoyaltyBreakdown {...content.royalties} />
        </div>
      </div>
    </section>
  );
}
