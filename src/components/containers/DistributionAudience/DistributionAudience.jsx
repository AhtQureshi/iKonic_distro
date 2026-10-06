import { map } from '../../../utils/assets.js';
import { audience } from '../../../data/distribution.js';
import { Img } from '../../atoms/index.js';
import { PhoneMockup, SectionHeading, StatTile } from '../../subcomponents/index.js';

/** "Your Music. Everywhere Fans Listen." — phone with delivery status beside a 2x2 stat grid, over a glowing world map. */
export function DistributionAudience({ content = audience }) {
  return (
    <section className="distribution-audience">
      <Img src={map('world-dots')} alt="" className="distribution-audience__map" />
      <div className="container distribution-audience__grid">
        <div data-reveal="left"><PhoneMockup {...content.phone} /></div>
        <div>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          <div className="distribution-audience__stats" data-reveal="up" data-reveal-delay="250">
            {content.stats.map((s) => <StatTile key={s.label} {...s} className="distribution-audience__stat" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
