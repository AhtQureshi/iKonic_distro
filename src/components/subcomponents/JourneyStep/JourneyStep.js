import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/**
 * One step of a horizontal process. Connector lines are drawn by the parent list.
 * Pass `number` (e.g. '01') instead of `icon` to show a step number in the circle.
 */
export function JourneyStep({ icon, number, title, text, className = '' } = {}) {
  return html`<li class="${cx('journey-step', className)}">
    ${number
      ? html`<span class="journey-step__icon journey-step__icon--number">${number}</span>`
      : html`<span class="journey-step__icon">${Icon({ name: icon, size: 26 })}</span>`}
    <div>
      <h3 class="journey-step__title">${title}</h3>
      <p class="journey-step__text">${text}</p>
    </div>
  </li>`;
}
