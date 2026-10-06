import { rich } from '../../../utils/cx.js';
import { cta } from '../../../data/distribution.js';
import { Button } from '../../atoms/index.js';
import { SectionHeading } from '../../subcomponents/index.js';

/** Closing call to action: glowing rounded banner with headline, buttons and three headline stats. */
export function DistributionCta({ content = cta }) {
  return (
    <section className="distribution-cta">
      <div className="container">
        <div className="distribution-cta__banner">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} size="display" />
          <div className="distribution-cta__actions" data-reveal="up" data-reveal-delay="300">
            {content.actions.map((a) => <Button key={a.label} {...a} />)}
          </div>
          <dl className="distribution-cta__stats" data-reveal-stagger="up" data-reveal-delay="400">
            {content.stats.map((s) => (
              <div className="distribution-cta__stat" key={s.label}>
                <dt data-count>{s.value}</dt>
                <dd {...rich(s.label)} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
