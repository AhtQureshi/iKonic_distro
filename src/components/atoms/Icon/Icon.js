import { html, cx } from '../../../utils/html.js';
import { ICONS } from '../../../assets/svgs/icons/index.js';

/**
 * Single-colour icon from src/assets/svgs/icons/<name>.svg.
 * Icons are inlined (via the generated registry), so they take the current text colour.
 */
export function Icon({ name, size = 20, className = '', label } = {}) {
  const svg = ICONS[name];
  if (!svg) console.warn(`Icon "${name}" not found in src/assets/svgs/icons/`);
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  return html`<span class="${cx('icon', className)}" style="--icon-size:${size}px" ${a11y}>${svg || ''}</span>`;
}
