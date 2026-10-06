import { labelsRoles } from '../../../data/labels.js';
import { IconCard, SectionIntro } from '../../subcomponents/index.js';

/** "Give the Right Access to the Right People." — intro + eight role cards. */
export function LabelsRoles({ content = labelsRoles }) {
  return (
    <section className="labels-roles">
      <div className="container labels-roles__grid">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} action={content.action} />
        <div className="labels-roles__cards" data-reveal-stagger="up" data-reveal-step="70">
          {content.items.map((item) => <IconCard key={item.title} {...item} size="sm" />)}
        </div>
      </div>
    </section>
  );
}
