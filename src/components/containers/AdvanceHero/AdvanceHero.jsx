import { image } from '../../../utils/assets.js';
import { hero } from '../../../data/advance.js';
import { Button, Eyebrow, Heading, Img, Text } from '../../atoms/index.js';
import { FundingCard, TitledPoint } from '../../subcomponents/index.js';

/**
 * Advance hero over a full-bleed banner: headline + CTAs beside the "Advance Approved" card,
 * with the four benefit points in a row underneath.
 */
export function AdvanceHero({ content = hero }) {
  return (
    <section className="advance-hero" aria-labelledby="advance-hero-title">
      {content.image && (
        <div className="advance-hero__media" aria-hidden="true">
          {/* Not `eager`: React would add a preload hint that other pages pick up when they prefetch /advance. */}
          <Img src={image(content.image.file)} width={content.image.width} height={content.image.height} className="advance-hero__bg" />
        </div>
      )}
      <div className="container">
        <div className="advance-hero__grid">
          <div className="advance-hero__intro" data-reveal-stagger="up" data-reveal-step="120">
            <Eyebrow text={content.eyebrow} />
            <Heading text={content.title} level={1} size="display" id="advance-hero-title" className="advance-hero__title" />
            <Text text={content.text} size="lg" className="advance-hero__text" />
            <div className="advance-hero__actions">
              {content.actions.map((a) => <Button key={a.label} {...a} />)}
            </div>
          </div>
          <div className="advance-hero__card" data-reveal="zoom" data-reveal-delay="300"><FundingCard {...content.offer} /></div>
        </div>
        <div className="advance-hero__points" data-reveal-stagger="up" data-reveal-delay="400" data-reveal-step="100">
          {content.points.map((p) => <TitledPoint key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}
