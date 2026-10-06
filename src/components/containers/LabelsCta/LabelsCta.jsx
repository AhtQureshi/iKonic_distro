import { rich } from '../../../utils/cx.js';
import { labelsCta } from '../../../data/labels.js';
import { Button, Icon } from '../../atoms/index.js';
import { SectionHeading } from '../../subcomponents/index.js';

/** Closing banner: "Build Your Label. Go Further." with CTAs and three headline stats. */
export function LabelsCta({ content = labelsCta }) {
  return (
    <section className="labels-cta">
      <div className="container">
        <div className="labels-cta__banner">
          <div className="labels-cta__grid">
            <div>
              <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
              <div className="labels-cta__actions" data-reveal="up" data-reveal-delay="350">
                {content.actions.map((a) => <Button key={a.label} {...a} />)}
              </div>
            </div>
            <div className="labels-cta__stats" data-reveal-stagger="up" data-reveal-delay="300" data-reveal-step="120">
              {content.stats.map((s) => (
                <div className="labels-cta__stat" key={s.label}>
                  <Icon name={s.icon} size={36} />
                  <div>
                    <p className="labels-cta__value" data-count>{s.value}</p>
                    <p className="labels-cta__label" {...rich(s.label)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
