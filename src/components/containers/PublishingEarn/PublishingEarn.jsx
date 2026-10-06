import { earn } from '../../../data/publishing.js';
import { IncomeSourceCard, SectionIntro } from '../../subcomponents/index.js';

/** "Your Music Earns Everywhere." — intro beside a grid of royalty income sources. */
export function PublishingEarn({ content = earn }) {
  return (
    <section className="publishing-earn">
      <div className="container publishing-earn__grid">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} />
        <div className="publishing-earn__cards" data-reveal-stagger="up" data-reveal-step="80">
          {content.items.map((i) => <IncomeSourceCard key={i.title} {...i} />)}
        </div>
      </div>
    </section>
  );
}
