import { html, cx } from '../../../utils/html.js';
import { image } from '../../../utils/assets.js';

/**
 * IKONIC wordmark (src/assets/images/logo.webp).
 * height: rendered height in px; width follows the 1194x298 aspect ratio.
 */
export function Logo({ href, height = 24, className = '' } = {}) {
  const width = Math.round(height * (1194 / 298));
  const img = html`<img class="logo__img" src="${image('logo.webp')}" alt="IKONIC" width="${width}" height="${height}">`;

  return href
    ? html`<a class="${cx('logo', className)}" href="${href}" aria-label="IKONIC home">${img}</a>`
    : html`<span class="${cx('logo', className)}">${img}</span>`;
}
