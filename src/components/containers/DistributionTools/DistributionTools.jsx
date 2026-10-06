import { tools } from '../../../data/distribution.js';
import { Button } from '../../atoms/index.js';
import { CheckList, ReleaseManagerMockup, SectionHeading } from '../../subcomponents/index.js';

/** "More Than Just Distribution." — feature checklist beside the releases dashboard. */
export function DistributionTools({ content = tools }) {
  return (
    <section className="distribution-tools">
      <div className="container distribution-tools__grid">
        <div>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          <div data-reveal="up" data-reveal-delay="200">
            <CheckList items={content.checklist} className="distribution-tools__checks" />
            <Button {...content.action} />
          </div>
        </div>
        <div data-reveal="right" data-reveal-delay="150"><ReleaseManagerMockup {...content.dashboard} /></div>
      </div>
    </section>
  );
}
