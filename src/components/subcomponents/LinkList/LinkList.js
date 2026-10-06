import { html, cx } from '../../../utils/html.js';

/** Inline list of text links. items: [{ label, href }] */
export function LinkList({ items = [], label, className = '' } = {}) {
  return html`<nav class="${cx('link-list', className)}" ${label ? `aria-label="${label}"` : ''}>
    <ul>${items.map((i) => html`<li><a href="${i.href}">${i.label}</a></li>`)}</ul>
  </nav>`;
}
