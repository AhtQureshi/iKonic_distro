import { rich } from '../../../utils/cx.js';
import { illustration } from '../../../utils/assets.js';
import { cta } from '../../../data/distribution.js';
import { Button, Img } from '../../atoms/index.js';
import { SectionHeading } from '../../subcomponents/index.js';

/** Closing call to action over the stage crowd: headline + buttons on the left, three headline stats in one strip on the right. */
export function DistributionCta({ content = cta }) {
  return (
    <section className="distribution-cta">
      <Img src={illustration('crowd')} alt="" className="distribution-cta__crowd" />
      <div className="container distribution-cta__inner">
        <div className="distribution-cta__copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} size="display" />
          <div className="distribution-cta__actions" data-reveal="up" data-reveal-delay="300">
            {content.actions.map((a) => <Button key={a.label} {...a} />)}
          </div>
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
    </section>
  );
}
