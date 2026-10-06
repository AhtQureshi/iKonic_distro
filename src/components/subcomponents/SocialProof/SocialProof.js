import { html, cx } from '../../../utils/html.js';
import { Avatar } from '../../atoms/index.js';

/** Overlapping avatars + headline number, e.g. "50K+ Artists & Labels". */
export function SocialProof({ avatars = [], value, label, className = '' } = {}) {
  return html`<div class="${cx('social-proof', className)}">
    <div class="social-proof__avatars">${avatars.map((tone) => Avatar({ tone, size: 44 }))}</div>
    <div>
      <p class="social-proof__value" data-count>${value}</p>
      <p class="social-proof__label">${label}</p>
    </div>
  </div>`;
}
