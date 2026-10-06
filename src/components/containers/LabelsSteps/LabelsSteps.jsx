import { labelsSteps } from '../../../data/labels.js';
import { NumberedStep, SectionIntro } from '../../subcomponents/index.js';

/** "Get Your Team Running in Minutes." — intro + four numbered steps joined by dotted lines. */
export function LabelsSteps({ content = labelsSteps }) {
  return (
    <section className="labels-steps">
      <div className="container labels-steps__grid">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} action={content.action} />
        <ol className="labels-steps__list" data-reveal-stagger="up" data-reveal-step="120">
          {content.steps.map((s, i) => <NumberedStep key={s.title} {...s} number={String(i + 1).padStart(2, '0')} />)}
        </ol>
      </div>
    </section>
  );
}
