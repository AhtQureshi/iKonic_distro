import { html, cx } from '../../../utils/html.js';
import { Eyebrow, Heading, Text } from '../../atoms/index.js';

/** Eyebrow + heading + optional supporting text. align: 'left' | 'center' */
export function SectionHeading({ eyebrow, title, text, level = 2, size = 'h2', align = 'left', className = '' } = {}) {
  return html`<div class="${cx('section-heading', `section-heading--${align}`, className)}" data-reveal-stagger="up" data-reveal-step="110">
    ${eyebrow && Eyebrow({ text: eyebrow })}
    ${Heading({ text: title, level, size })}
    ${text && Text({ text, size: 'lg' })}
  </div>`;
}
