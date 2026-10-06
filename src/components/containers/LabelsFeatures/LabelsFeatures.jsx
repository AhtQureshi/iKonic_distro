import { labelsFeatures } from '../../../data/labels.js';
import { IconCard, SectionIntro } from '../../subcomponents/index.js';

/** "Everything Your Label Needs." — intro on the left, six feature cards on the right. */
export function LabelsFeatures({ content = labelsFeatures }) {
  return (
    <section className="labels-features">
      <div className="container labels-features__grid">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} action={content.action} />
        <div className="labels-features__cards" data-reveal-stagger="up" data-reveal-step="90">
          {content.items.map((item) => <IconCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}
