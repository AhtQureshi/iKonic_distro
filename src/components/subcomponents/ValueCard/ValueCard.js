import { html, cx } from '../../../utils/html.js';
import { Heading, Icon, Text } from '../../atoms/index.js';

/** Compact benefit tile: red outline icon, title, one-line text. */
export function ValueCard({ icon, title, text, className = '' } = {}) {
  return html`<article class="${cx('value-card', className)}">
    ${Icon({ name: icon, size: 34, className: 'value-card__icon' })}
    ${Heading({ text: title, level: 3, size: 'h3', className: 'value-card__title' })}
    ${Text({ text, size: 'sm', className: 'value-card__text' })}
  </article>`;
}
