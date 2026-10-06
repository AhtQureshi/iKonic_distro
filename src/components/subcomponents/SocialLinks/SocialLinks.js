import { html, cx } from '../../../utils/html.js';
import { IconButton } from '../../atoms/index.js';

/** Row of round social icons. items: [{ icon, label, href }] */
export function SocialLinks({ items = [], className = '' } = {}) {
  return html`<ul class="${cx('social-links', className)}">
    ${items.map((s) => html`<li>${IconButton({ icon: s.icon, label: s.label, href: s.href, size: 38, iconSize: 15, extra: { target: '_blank', rel: 'noopener' } })}</li>`)}
  </ul>`;
}
