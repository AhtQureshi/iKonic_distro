import { html, cx } from '../../../utils/html.js';

/** Tiny bar chart. values are 0-100 (percent of the bar height). */
export function MiniBars({ values = [], height = 34, className = '' } = {}) {
  return html`<span class="${cx('mini-bars', className)}" style="--bars-h:${height}px" aria-hidden="true">${values.map((v, i) => html`<i style="height:${v}%;--i:${i}"></i>`)}</span>`;
}
