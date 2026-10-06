import { platform } from '../../../data/home.js';
import { Button } from '../../atoms/index.js';
import { DashboardMockup, SectionHeading } from '../../subcomponents/index.js';

/** "One Dashboard. Every Opportunity." — copy beside the dashboard mockup. */
export function PlatformShowcase({ content = platform }) {
  return (
    <section className="section platform-showcase">
      <div className="container platform-showcase__grid">
        <div className="platform-showcase__copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          <div data-reveal="up" data-reveal-delay="350"><Button {...content.action} /></div>
        </div>
        <div className="platform-showcase__visual" data-reveal="right" data-reveal-delay="150">
          <DashboardMockup {...content.dashboard} />
        </div>
      </div>
    </section>
  );
}
