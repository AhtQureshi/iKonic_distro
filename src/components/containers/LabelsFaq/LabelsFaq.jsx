import { labelsFaq } from '../../../data/labels.js';
import { Accordion, SectionIntro } from '../../subcomponents/index.js';

/** "Quick answers." — intro + accordion (one open at a time). */
export function LabelsFaq({ content = labelsFaq }) {
  return (
    <section className="labels-faq">
      <div className="container labels-faq__grid">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} action={content.action} />
        <Accordion
          items={content.items.map((item) => ({ question: item.question, answer: item.answer }))}
          className="labels-faq__list"
          data-reveal="up"
          data-reveal-delay="200"
        />
      </div>
    </section>
  );
}
