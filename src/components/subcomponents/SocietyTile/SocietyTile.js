import { html, cx } from '../../../utils/html.js';

/** Collecting-society tile: bold name + region. `highlight` paints the name red (e.g. "+ MORE"). */
export function SocietyTile({ name, region, highlight = false, className = '' } = {}) {
  return html`<div class="${cx('society-tile', highlight && 'society-tile--highlight', className)}">
    <b class="society-tile__name">${name}</b>
    <span class="society-tile__region">${region}</span>
  </div>`;
}
