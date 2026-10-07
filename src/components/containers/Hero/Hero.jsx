import { image, placeholder } from '../../../utils/assets.js';
import { hero } from '../../../data/home.js';
import { stores } from '../../../data/site.js';
import { Button, Eyebrow, Heading, Img, Text } from '../../atoms/index.js';
import { MetricCard, ReleaseStatus, StoreList } from '../../subcomponents/index.js';

/** Home hero: headline + CTAs, studio photo with floating stat cards, store logos. */
export function Hero({ content = hero }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Img src={image(content.image.file)} placeholder={placeholder(content.image.file)} alt={content.image.alt} width={1983} height={793} priority className="hero__photo" />
        <div className="hero__floats" data-reveal-stagger="zoom" data-reveal-delay="450" data-reveal-step="160">
          <ReleaseStatus {...content.release} className="hero__float hero__float--release" />
          <MetricCard {...content.advance} glass className="hero__float hero__float--advance" />
          <MetricCard {...content.streams} glass className="hero__float hero__float--streams" />
          <MetricCard {...content.earnings} glass className="hero__float hero__float--earnings" />
        </div>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy" data-reveal-stagger="up" data-reveal-step="120">
          <Eyebrow text={content.eyebrow} />
          <Heading text={content.title} level={1} size="h1" id="hero-title" />
          <Text text={content.text} size="lg" tone="default" className="hero__text" />
          <div className="hero__actions">
            {content.actions.map((a) => <Button key={a.label} {...a} />)}
          </div>
        </div>
      </div>

      <div className="container hero__stores" data-reveal="up" data-reveal-delay="700">
        <StoreList stores={stores} />
      </div>
    </section>
  );
}
