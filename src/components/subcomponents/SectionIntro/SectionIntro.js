import { html, cx } from '../../../utils/html.js';
import { Button } from '../../atoms/index.js';
import { SectionHeading } from '../SectionHeading/SectionHeading.js';

/**
 * Left column of a split section: eyebrow, heading, text, optional extra markup
 * (e.g. a check list) and a call-to-action button.
 */
export function SectionIntro({ eyebrow, title, text, action, extra = '', level = 2, size = 'h2', className = '' } = {}) {
  return html`<div class="${cx('section-intro', className)}">
    ${SectionHeading({ eyebrow, title, text, level, size })}
    ${extra && html`<div class="section-intro__extra" data-reveal="up" data-reveal-delay="300">${extra}</div>`}
    ${action && html`<div class="section-intro__action" data-reveal="up" data-reveal-delay="350">${Button(action)}</div>`}
  </div>`;
}
