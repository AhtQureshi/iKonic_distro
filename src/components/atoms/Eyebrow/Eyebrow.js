import { html, cx } from '../../../utils/html.js';

/** Small red uppercase label that sits above section headings. */
export function Eyebrow({ text, className = '' } = {}) {
  return html`<p class="${cx('eyebrow', className)}">${text}</p>`;
}
