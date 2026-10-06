import { html, cx } from '../../../utils/html.js';

/**
 * Body copy.
 * size: 'sm' | 'md' | 'lg'   tone: 'muted' | 'dim' | 'default'
 */
export function Text({ text, size = 'md', tone = 'muted', className = '' } = {}) {
  return html`<p class="${cx('text', `text--${size}`, `text--${tone}`, className)}">${text}</p>`;
}
