import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/** Red line icon beside a short bold title and a muted one-line description. */
export function TitledPoint({ icon, title, text, className = '' } = {}) {
  return html`<div class="${cx('titled-point', className)}">
    ${Icon({ name: icon, size: 34, className: 'titled-point__icon' })}
    <div>
      <p class="titled-point__title">${title}</p>
      <p class="titled-point__text">${text}</p>
    </div>
  </div>`;
}
