import { html } from '../../../utils/html.js';
import { faq } from '../../../data/publishing.js';
import { AccordionItem, SectionIntro, setupAccordion } from '../../subcomponents/index.js';

/** "Quick answers." — intro beside an accordion of publishing questions. */
export function PublishingFaq(content = faq) {
  return html`<section class="publishing-faq">
    <div class="container publishing-faq__grid">
      ${SectionIntro({ eyebrow: content.eyebrow, title: content.title, text: content.text, action: content.action })}
      <div class="publishing-faq__list" data-accordion data-reveal="up" data-reveal-delay="150">
        ${content.items.map((i) => AccordionItem(i))}
      </div>
    </div>
  </section>`;
}

/** One-open-at-a-time FAQ toggles. */
export function setupPublishingFaq(root = document) {
  setupAccordion(root);
}
