import { hero } from '../../../data/advance.js';
import { Button, Eyebrow, Heading, Text } from '../../atoms/index.js';
import { FundingCard, TitledPoint } from '../../subcomponents/index.js';

/** Advance hero: headline + CTAs + four benefit points, with the "Advance Approved" card. */
export function AdvanceHero({ content = hero }) {
  return (
    <section className="advance-hero" aria-labelledby="advance-hero-title">
      <div className="container advance-hero__grid">
        <div className="advance-hero__copy">
          <div className="advance-hero__intro" data-reveal-stagger="up" data-reveal-step="120">
            <Eyebrow text={content.eyebrow} />
            <Heading text={content.title} level={1} size="display" id="advance-hero-title" className="advance-hero__title" />
            <Text text={content.text} size="lg" className="advance-hero__text" />
            <div className="advance-hero__actions">
              {content.actions.map((a) => <Button key={a.label} {...a} />)}
            </div>
          </div>
          <div className="advance-hero__points" data-reveal-stagger="up" data-reveal-delay="400" data-reveal-step="100">
            {content.points.map((p) => <TitledPoint key={p.title} {...p} />)}
          </div>
        </div>
        <div className="advance-hero__card" data-reveal="zoom" data-reveal-delay="300"><FundingCard {...content.offer} /></div>
      </div>
    </section>
  );
}
