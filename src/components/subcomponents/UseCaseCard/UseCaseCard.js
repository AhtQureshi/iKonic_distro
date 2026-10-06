import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/** Card with a glowing red "visual" panel (tone 1-4 varies the glow) over a title and text. */
export function UseCaseCard({ icon, title, text, tone = 1, className = '' } = {}) {
  return html`<article class="${cx('use-case-card', className)}">
    <div class="${cx('use-case-card__visual', `use-case-card__visual--${tone}`)}">${Icon({ name: icon, size: 44, className: 'use-case-card__icon' })}</div>
    <div class="use-case-card__body">
      <h3 class="use-case-card__title">${title}</h3>
      <p class="use-case-card__text">${text}</p>
    </div>
  </article>`;
}
