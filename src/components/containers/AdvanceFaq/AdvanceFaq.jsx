import { faq } from '../../../data/advance.js';
import { Button } from '../../atoms/index.js';
import { Accordion, SectionHeading } from '../../subcomponents/index.js';

/** "Quick answers." — heading + link beside an accordion of questions (one open at a time). */
export function AdvanceFaq({ content = faq }) {
  return (
    <section className="section advance-faq">
      <div className="container advance-faq__grid">
        <div className="advance-faq__copy">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          {content.action && <div data-reveal="up" data-reveal-delay="300"><Button {...content.action} /></div>}
        </div>
        <Accordion
          items={content.items.map((item) => ({ question: item.q, answer: item.a }))}
          className="advance-faq__list"
          data-reveal-stagger="up"
          data-reveal-step="80"
        />
      </div>
    </section>
  );
}
