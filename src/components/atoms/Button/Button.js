import { html, cx, attrs } from '../../../utils/html.js';
import { Icon } from '../Icon/Icon.js';

/**
 * Button / link button.
 * variant: 'primary' | 'outline' | 'ghost'
 * size:    'sm' | 'md' | 'lg'
 * Renders an <a> when href is given, otherwise a <button>.
 */
export function Button({
  label,
  href,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  className = '',
  extra = {},
} = {}) {
  const classes = cx('btn', `btn--${variant}`, `btn--${size}`, block && 'btn--block', className);
  const iconSize = size === 'sm' ? 14 : 16;
  const inner = html`${iconLeft && Icon({ name: iconLeft, size: iconSize + 4 })}<span>${label}</span>${iconRight && Icon({ name: iconRight, size: iconSize, className: 'btn__icon-right' })}`;

  return href
    ? html`<a class="${classes}" href="${href}" ${attrs(extra)}>${inner}</a>`
    : html`<button class="${classes}" type="button" ${attrs(extra)}>${inner}</button>`;
}
