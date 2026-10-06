import { illustration } from '../../../utils/assets.js';
import { cta } from '../../../data/advance.js';
import { Button, Img } from '../../atoms/index.js';
import { SectionHeading, StatTile } from '../../subcomponents/index.js';

/** "Get Funded. Go Further." — closing call to action over the stage crowd, with three stat tiles beside it. */
export function AdvanceCta({ content = cta }) {
  return (
    <section className="advance-cta">
      <Img src={illustration('crowd')} alt="" className="advance-cta__crowd" />
      <div className="container advance-cta__inner">
        <div className="advance-cta__copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          <div className="advance-cta__actions" data-reveal="up" data-reveal-delay="300">
            {content.actions.map((a) => <Button key={a.label} {...a} />)}
          </div>
        </div>
        <div className="advance-cta__stats" data-reveal-stagger="up" data-reveal-delay="400" data-reveal-step="110">
          {content.stats.map((s) => <StatTile key={s.label} {...s} stacked />)}
        </div>
      </div>
    </section>
  );
}
