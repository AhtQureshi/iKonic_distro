import { html, cx } from '../../../utils/html.js';
import { Cover } from '../Cover/Cover.js';

/** Round avatar. Uses the Cover atom for the image / placeholder art. */
export function Avatar({ tone = 1, src, alt = '', size = 44, className = '' } = {}) {
  return html`<span class="${cx('avatar', className)}" style="--avatar-size:${size}px">${Cover({ tone, src, alt, radius: 'full' })}</span>`;
}
