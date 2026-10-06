import { html, cx } from '../../../utils/html.js';

/** Label / value rows separated by hairlines (offer summaries, estimated terms). */
export function DetailRows({ rows = [], className = '' } = {}) {
  return html`<dl class="${cx('detail-rows', className)}">
    ${rows.map((r) => html`<div class="detail-rows__row"><dt>${r.label}</dt><dd>${r.value}</dd></div>`)}
  </dl>`;
}
