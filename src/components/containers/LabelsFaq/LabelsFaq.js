import { html } from '../../../utils/html.js';
import { labelsFaq } from '../../../data/labels.js';
import { AccordionItem, SectionIntro, setupAccordion } from '../../subcomponents/index.js';

/** "Quick answers." — intro + accordion. Toggle behaviour comes from setupAccordion. */
export function LabelsFaq(content = labelsFaq) {
  return html`<section class="labels-faq">
    <div class="container labels-faq__grid">
      ${SectionIntro(content)}
      <div class="labels-faq__list" data-accordion data-reveal="up" data-reveal-delay="200">
        ${content.items.map((item) => AccordionItem(item))}
      </div>
    </div>
  </section>`;
}

/** Wires up the FAQ toggles (one open at a time). */
export function setupLabelsFaq(root = document) {
  setupAccordion(root);
}
