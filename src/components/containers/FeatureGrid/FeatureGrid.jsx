import { cx } from '../../../utils/cx.js';
import { features } from '../../../data/home.js';
import { FeatureCard, SectionHeading } from '../../subcomponents/index.js';

/** "More Than Distribution." — four product feature cards. The heading is optional (omit `title`). */
export function FeatureGrid({ content = features }) {
  return (
    <section className={cx('section feature-grid', !content.title && 'feature-grid--bare')}>
      <div className="container">
        {content.title && <SectionHeading eyebrow={content.eyebrow} title={content.title} />}
        <div className="feature-grid__cards" data-reveal-stagger="up" data-reveal-step="110">
          {content.items.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </div>
    </section>
  );
}
