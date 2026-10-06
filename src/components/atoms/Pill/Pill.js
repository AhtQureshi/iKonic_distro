import { html, cx } from '../../../utils/html.js';

/** Toggle pill used for filters / tabs. */
export function Pill({ label, value, active = false, size = 'md', className = '' } = {}) {
  return html`<button type="button" class="${cx('pill', `pill--${size}`, active && 'is-active', className)}" data-value="${value ?? label}" aria-pressed="${active}">${label}</button>`;
}
