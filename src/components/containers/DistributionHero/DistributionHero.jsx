import { image, placeholder } from '../../../utils/assets.js';
import { hero } from '../../../data/distribution.js';
import { Button, Eyebrow, Heading, Img, Text } from '../../atoms/index.js';
import { MetricCard, ReleaseStatus, StoreStatusList, TitledPoint } from '../../subcomponents/index.js';

/** Distribution hero over a full-bleed banner: headline + CTAs, floating release / store / streams cards, three key points. */
export function DistributionHero({ content = hero }) {
  return (
    <section className="distribution-hero" aria-labelledby="distribution-hero-title">
      {content.image && (
        <div className="distribution-hero__media" aria-hidden="true">
          <Img src={image(content.image.file)} placeholder={placeholder(content.image.file)} width={content.image.width} height={content.image.height} priority className="distribution-hero__bg" />
        </div>
      )}
      <div className="container">
        <div className="distribution-hero__grid">
          <div className="distribution-hero__copy" data-reveal-stagger="up" data-reveal-step="120">
            <Eyebrow text={content.eyebrow} />
            <Heading text={content.title} level={1} size="h1" id="distribution-hero-title" />
            <Text text={content.text} size="lg" className="distribution-hero__text" />
            <div className="distribution-hero__actions">
              {content.actions.map((a) => <Button key={a.label} {...a} />)}
            </div>
          </div>

          <div className="distribution-hero__visual" aria-hidden="true" data-reveal-stagger="zoom" data-reveal-delay="300" data-reveal-step="160">
            <ReleaseStatus {...content.release} className="distribution-hero__float distribution-hero__float--release" />
            <div className="distribution-hero__float distribution-hero__float--stores"><StoreStatusList {...content.stores} /></div>
            <MetricCard {...content.streams} glass className="distribution-hero__float distribution-hero__float--streams" />
          </div>
        </div>

        <div className="distribution-hero__points" data-reveal-stagger="up" data-reveal-step="100">
          {content.points.map((p) => <TitledPoint key={p.title} {...p} className="distribution-hero__point" />)}
        </div>
      </div>
    </section>
  );
}
