import { html, cx } from '../../../utils/html.js';
import { flag } from '../../../utils/assets.js';

/** Country flag from src/assets/svgs/flags/<code>.svg (ISO 3166 alpha-2, lowercase). */
export function Flag({ code, label = '', size = 22, className = '' } = {}) {
  return html`<img class="${cx('flag', className)}" src="${flag(code)}" alt="${label}" width="${size}" height="${Math.round(size * 0.667)}" loading="lazy">`;
}
