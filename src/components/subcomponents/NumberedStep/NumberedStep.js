import { html, cx } from '../../../utils/html.js';

/** One step of a numbered process: red ring with the number, title and text. Connectors are drawn by the parent list. */
export function NumberedStep({ number, title, text, className = '' } = {}) {
  return html`<li class="${cx('numbered-step', className)}">
    <span class="numbered-step__num">${number}</span>
    <h3 class="numbered-step__title">${title}</h3>
    <p class="numbered-step__text">${text}</p>
  </li>`;
}
