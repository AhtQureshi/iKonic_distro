import { cx } from '../../../utils/cx.js';
import { journey } from '../../../data/home.js';
import { JourneyStep, SectionHeading } from '../../subcomponents/index.js';

/**
 * "From Song to Success." — five-step process with connecting line.
 * Optional: content.align = 'center' (centred heading + steps), content.headingAlign (overrides the heading's alignment),
 * content.divided = false (no top rule).
 */
export function Journey({ content = journey }) {
  const { align = 'left', headingAlign = align, divided = true } = content;
  return (
    <section className={cx('section', divided && 'section--divided', 'journey', align === 'center' && 'journey--center')}>
      <div className="container">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} align={headingAlign} />
        <ol className="journey__steps" data-reveal-stagger="up" data-reveal-step="150">
          {content.steps.map((s) => <JourneyStep key={s.title} {...s} />)}
        </ol>
      </div>
    </section>
  );
}
