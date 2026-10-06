import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/** Plain bordered card: red line icon, title and short text. size: 'md' | 'sm' */
export function IconCard({ icon, title, text, size = 'md', className = '' } = {}) {
  return html`<article class="${cx('icon-card', `icon-card--${size}`, className)}">
    <span class="icon-card__icon">${Icon({ name: icon, size: size === 'sm' ? 38 : 44 })}</span>
    <h3 class="icon-card__title">${title}</h3>
    <p class="icon-card__text">${text}</p>
  </article>`;
}
