import { process } from '../../../data/advance.js';
import { JourneyStep, SectionHeading } from '../../subcomponents/index.js';

/** "Get Funded. Keep Creating." — four numbered steps on a red connecting line. */
export function AdvanceProcess({ content = process }) {
  return (
    <section className="section advance-process" id={content.id}>
      <div className="container">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <ol className="advance-process__steps" data-reveal-stagger="up" data-reveal-step="140">
          {content.steps.map((s) => <JourneyStep key={s.title} {...s} />)}
        </ol>
      </div>
    </section>
  );
}
