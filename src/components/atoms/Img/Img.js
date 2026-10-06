import { html, cx, attrs } from '../../../utils/html.js';

/** Plain image with sensible defaults (lazy loading, async decoding). */
export function Img({ src, alt = '', width, height, eager = false, className = '' } = {}) {
  return html`<img class="${cx('img', className)}" ${attrs({ src, alt, width, height, loading: eager ? 'eager' : 'lazy', decoding: 'async' })}>`;
}
