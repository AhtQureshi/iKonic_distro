import { html, cx } from '../../../utils/html.js';

/** One announcement in the scrolling ticker. */
export function TickerItem({ text, href, className = '' } = {}) {
  const tag = href ? 'a' : 'span';
  return html`<${tag} class="${cx('ticker-item', className)}" ${href ? `href="${href}"` : ''}><i aria-hidden="true"></i>${text}</${tag}>`;
}
