import { html, cx } from '../../../utils/html.js';
import { Button, Eyebrow, Heading, Icon, Text } from '../../atoms/index.js';
import { CheckList } from '../CheckList/CheckList.js';

/** Large glowing panel pitching an offer to an audience (labels, distributors…): icon, copy, check list, CTA. */
export function OfferPanel({ icon, eyebrow, title, text, items = [], action, className = '' } = {}) {
  return html`<article class="${cx('offer-panel', className)}">
    <span class="offer-panel__icon">${Icon({ name: icon, size: 30 })}</span>
    ${eyebrow && Eyebrow({ text: eyebrow, className: 'offer-panel__eyebrow' })}
    ${Heading({ text: title, level: 3, size: 'h3', className: 'offer-panel__title' })}
    ${text && Text({ text, className: 'offer-panel__text' })}
    ${CheckList({ items, className: 'offer-panel__list' })}
    ${action && Button({ variant: 'outline', iconRight: 'arrow-right', ...action })}
  </article>`;
}
