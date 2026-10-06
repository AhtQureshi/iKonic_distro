import { dashboard } from '../../../data/publishing.js';
import { RoyaltyDashboard, SectionIntro } from '../../subcomponents/index.js';

/** "Manage Your Publishing in One Place." — intro beside the publishing dashboard mockup. */
export function PublishingDashboard({ content = dashboard }) {
  return (
    <section className="publishing-dashboard">
      <div className="container publishing-dashboard__grid">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} action={content.action} />
        <div data-reveal="right" data-reveal-delay="150"><RoyaltyDashboard {...content.mockup} /></div>
      </div>
    </section>
  );
}
