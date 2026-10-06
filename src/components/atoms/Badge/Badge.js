import { html, cx } from '../../../utils/html.js';

/** Small label chip. variant: 'light' | 'red' | 'success' */
export function Badge({ label, variant = 'light', className = '' } = {}) {
  return html`<span class="${cx('badge', `badge--${variant}`, className)}">${label}</span>`;
}
