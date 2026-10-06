import { tracking } from '../../../data/advance.js';
import { Button } from '../../atoms/index.js';
import { CheckList, RepaymentMockup, SectionHeading } from '../../subcomponents/index.js';

/** "Track Everything In Real Time." — repayment dashboard on a laptop, beside a checklist. */
export function AdvanceTracking({ content = tracking }) {
  return (
    <section className="section advance-tracking">
      <div className="container advance-tracking__grid">
        {/* The dashboard shown on a laptop: screen lid + keyboard base */}
        <div className="advance-tracking__screen" data-reveal="left">
          <div className="advance-tracking__laptop">
            <div className="advance-tracking__lid"><RepaymentMockup {...content.dashboard} /></div>
            <div className="advance-tracking__base" aria-hidden="true" />
          </div>
        </div>
        <div className="advance-tracking__copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          <div data-reveal="up" data-reveal-delay="300"><CheckList items={content.checks} className="advance-tracking__checks" /></div>
          <div data-reveal="up" data-reveal-delay="400"><Button {...content.action} /></div>
        </div>
      </div>
    </section>
  );
}
