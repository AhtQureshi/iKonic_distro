import { html, cx } from '../../../utils/html.js';
import { $$ } from '../../../utils/dom.js';

/**
 * One question / answer row of an accordion (FAQ).
 * Wrap a set of items in an element with `data-accordion` and call setupAccordion(root):
 * opening one item closes the others in the same group.
 */
export function AccordionItem({ question, answer, open = false, className = '' } = {}) {
  return html`<div class="${cx('accordion-item', open && 'is-open', className)}">
    <button type="button" class="accordion-item__q" aria-expanded="${open}">
      <span>${question}</span><span class="accordion-item__x" aria-hidden="true">+</span>
    </button>
    <div class="accordion-item__a"><p>${answer}</p></div>
  </div>`;
}

export function setupAccordion(root = document) {
  $$('[data-accordion]', root).forEach((group) => {
    const items = $$('.accordion-item', group);
    const setOpen = (item, open) => {
      const panel = item.querySelector('.accordion-item__a');
      item.classList.toggle('is-open', open);
      item.querySelector('.accordion-item__q').setAttribute('aria-expanded', String(open));
      panel.style.maxHeight = open ? `${panel.scrollHeight}px` : '';
    };
    items.forEach((item) => {
      if (item.classList.contains('is-open')) setOpen(item, true);
      item.querySelector('.accordion-item__q').addEventListener('click', () => {
        const open = !item.classList.contains('is-open');
        items.forEach((other) => setOpen(other, false));
        if (open) setOpen(item, true);
      });
    });
  });
}
