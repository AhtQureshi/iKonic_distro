import { html } from '../../../utils/html.js';
import { faq } from '../../../data/advance.js';
import { Button } from '../../atoms/index.js';
import { AccordionItem, SectionHeading, setupAccordion } from '../../subcomponents/index.js';

/** "Quick answers." — heading + link beside an accordion of questions. */
export function AdvanceFaq(content = faq) {
  return html`<section class="section advance-faq">
    <div class="container advance-faq__grid">
      <div class="advance-faq__copy">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
        <div data-reveal="up" data-reveal-delay="300">${Button(content.action)}</div>
      </div>
      <div class="advance-faq__list" data-accordion data-reveal-stagger="up" data-reveal-step="80">
        ${content.items.map((item) => AccordionItem({ question: item.q, answer: item.a }))}
      </div>
    </div>
  </section>`;
}

/** Open / close the questions (one open at a time). */
export function setupAdvanceFaq(root = document) {
  root.querySelectorAll('.advance-faq').forEach((section) => setupAccordion(section));
}
