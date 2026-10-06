import { html, cx } from '../../../utils/html.js';
import { Avatar, Icon } from '../../atoms/index.js';

/** Label account summary: avatar + name, four headline stats and a stack of artist avatars. */
export function LabelSummaryCard({ name, stats = [], avatars = [], more, className = '' } = {}) {
  return html`<div class="${cx('label-summary', className)}">
    <div class="label-summary__top">
      <span class="label-summary__avatar" aria-hidden="true"></span>
      <span class="label-summary__name">${name}</span>
      ${Icon({ name: 'chevron-down', size: 14, className: 'label-summary__caret' })}
    </div>
    <div class="label-summary__stats">
      ${stats.map((s) => html`<div>
        <p class="label-summary__value" data-count>${s.value}</p>
        <p class="label-summary__label">${s.label}</p>
      </div>`)}
    </div>
    <div class="label-summary__avatars">
      ${avatars.map((tone) => Avatar({ tone, size: 40, className: 'label-summary__dot' }))}
      ${more && html`<span class="label-summary__more">${more}</span>`}
    </div>
  </div>`;
}
