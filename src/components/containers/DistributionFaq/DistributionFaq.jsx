import { faq } from '../../../data/distribution.js';
import { Button } from '../../atoms/index.js';
import { Accordion, SectionHeading } from '../../subcomponents/index.js';

/** "Quick answers." — heading + link beside an accordion of questions (one open at a time). */
export function DistributionFaq({ content = faq }) {
  return (
    <section className="distribution-faq" data-distribution-faq>
      <div className="container distribution-faq__grid">
        <div>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          {content.action && <div className="distribution-faq__action" data-reveal="up" data-reveal-delay="300"><Button {...content.action} /></div>}
        </div>
        <Accordion
          items={content.items.map((item) => ({ question: item.question, answer: item.answer }))}
          className="distribution-faq__list"
          data-reveal="up"
          data-reveal-delay="150"
        />
      </div>
    </section>
  );
}
