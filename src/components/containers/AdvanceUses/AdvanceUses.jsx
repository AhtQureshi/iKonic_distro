import { uses } from '../../../data/advance.js';
import { SectionHeading, UseCaseCard } from '../../subcomponents/index.js';

/** "Fuel Your Next Chapter." — four ways to spend an advance. */
export function AdvanceUses({ content = uses }) {
  return (
    <section className="section advance-uses">
      <div className="container">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
        <div className="advance-uses__grid" data-reveal-stagger="up" data-reveal-step="110">
          {content.cards.map((c) => <UseCaseCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}
