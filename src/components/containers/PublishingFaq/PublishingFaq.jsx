import { faq } from '../../../data/publishing.js';
import { Accordion, SectionIntro } from '../../subcomponents/index.js';

/** "Quick answers." — intro beside an accordion of publishing questions (one open at a time). */
export function PublishingFaq({ content = faq }) {
  return (
    <section className="publishing-faq">
      <div className="container publishing-faq__grid">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} action={content.action} />
        <Accordion
          items={content.items.map((i) => ({ question: i.question, answer: i.answer }))}
          className="publishing-faq__list"
          data-reveal="up"
          data-reveal-delay="150"
        />
      </div>
    </section>
  );
}
