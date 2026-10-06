import { labelsDashboard } from '../../../data/labels.js';
import { CheckList, LabelDashboardMockup, SectionIntro } from '../../subcomponents/index.js';

/** "Complete Control at a Glance." — intro + check list beside the label dashboard mockup. */
export function LabelsDashboard({ content = labelsDashboard }) {
  return (
    <section className="labels-dashboard">
      <div className="container labels-dashboard__grid">
        <SectionIntro
          eyebrow={content.eyebrow}
          title={content.title}
          text={content.text}
          action={content.action}
          extra={<CheckList items={content.checklist} />}
        />
        <div data-reveal="left" data-reveal-delay="200"><LabelDashboardMockup {...content.mockup} /></div>
      </div>
    </section>
  );
}
