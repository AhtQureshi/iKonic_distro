import { html, cx } from '../../../utils/html.js';
import { Icon } from '../../atoms/index.js';

/** Icon + big number + label tile. `stacked` puts the icon above the number. */
export function StatTile({ icon, value, label, stacked = false, className = '' } = {}) {
  return html`<div class="${cx('stat-tile', stacked && 'stat-tile--stacked', className)}">
    ${Icon({ name: icon, size: 28 })}
    <div>
      <p class="stat-tile__value" data-count>${value}</p>
      <p class="stat-tile__label">${label}</p>
    </div>
  </div>`;
}
