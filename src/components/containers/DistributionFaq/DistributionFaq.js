import { html } from '../../../utils/html.js';
import { $ } from '../../../utils/dom.js';
import { faq } from '../../../data/distribution.js';
import { Button } from '../../atoms/index.js';
import { AccordionItem, SectionHeading, setupAccordion } from '../../subcomponents/index.js';

/** "Quick answers." — heading + link beside an accordion of questions. */
export function DistributionFaq(content = faq) {
  return html`<section class="distribution-faq" data-distribution-faq>
    <div class="container distribution-faq__grid">
      <div>
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
        <div class="distribution-faq__action" data-reveal="up" data-reveal-delay="300">${Button(content.action)}</div>
      </div>
      <div class="distribution-faq__list" data-accordion data-reveal="up" data-reveal-delay="150">
        ${content.items.map((item) => AccordionItem(item))}
      </div>
    </div>
  </section>`;
}

export function setupDistributionFaq(root = document) {
  const section = $('[data-distribution-faq]', root);
  if (section) setupAccordion(section);
}
