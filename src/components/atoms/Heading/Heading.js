import { html, cx } from '../../../utils/html.js';

/**
 * Heading. `text` may contain markup, e.g. 'Own More <span class="text-red">Of Your Music.</span>'
 * level: semantic tag (1-6). size: 'h1' | 'display' | 'h2' | 'h3' — visual size, independent of level.
 */
export function Heading({ text, level = 2, size = 'h2', id, className = '' } = {}) {
  const tag = `h${level}`;
  return html`<${tag} ${id ? `id="${id}"` : ''} class="${cx('heading', `heading--${size}`, className)}">${text}</${tag}>`;
}
