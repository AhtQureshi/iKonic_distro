import { html, cx, attrs } from '../../../utils/html.js';
import { Icon } from '../Icon/Icon.js';

/**
 * Round icon-only button (carousel arrows, card "go" links, socials).
 * variant: 'outline' | 'filled'
 */
export function IconButton({ icon, label, href, variant = 'outline', size = 40, iconSize, className = '', extra = {} } = {}) {
  const classes = cx('icon-btn', `icon-btn--${variant}`, className);
  const style = `--icon-btn-size:${size}px`;
  const inner = Icon({ name: icon, size: iconSize || Math.round(size * 0.42) });

  return href
    ? html`<a class="${classes}" style="${style}" href="${href}" aria-label="${label}" ${attrs(extra)}>${inner}</a>`
    : html`<button class="${classes}" style="${style}" type="button" aria-label="${label}" ${attrs(extra)}>${inner}</button>`;
}
