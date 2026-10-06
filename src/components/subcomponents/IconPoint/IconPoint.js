import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/** Red line icon beside a short bold statement (benefit bullets). */
export function IconPoint({ icon, text, className = '' } = {}) {
  return html`<div class="${cx('icon-point', className)}">
    ${Icon({ name: icon, size: 30 })}
    <p class="icon-point__text">${text}</p>
  </div>`;
}
