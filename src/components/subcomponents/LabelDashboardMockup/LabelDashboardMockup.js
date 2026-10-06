import { html, cx } from '../../../utils/html.js';
import { Cover, Icon, Logo, Sparkline } from '../../atoms/index.js';

/** Label overview dashboard screen: sidebar nav, KPI tiles, streams chart and the artist roster. */
export function LabelDashboardMockup({ title, range, nav = [], stats = [], chart = [], artistsTitle, artists = [], className = '' } = {}) {
  return html`<div class="${cx('label-dash', className)}" aria-hidden="true">
    <aside class="label-dash__side">
      ${Logo({ height: 16, className: 'label-dash__logo' })}
      ${nav.map((item) => html`<div class="${cx('label-dash__nav', item.active && 'is-active')}">${Icon({ name: item.icon, size: 16 })}${item.label}</div>`)}
    </aside>
    <div class="label-dash__main">
      <div class="label-dash__head">
        <h3 class="label-dash__title">${title}</h3>
        <span class="label-dash__range">${range} ${Icon({ name: 'chevron-down', size: 12 })}</span>
      </div>
      <div class="label-dash__stats">
        ${stats.map((s) => html`<div class="label-dash__stat">
          <p class="label-dash__value">${s.value}</p>
          <p class="label-dash__label">${s.label}</p>
          <p class="label-dash__trend">${s.trend}</p>
        </div>`)}
      </div>
      <div class="label-dash__chart">
        ${Sparkline({ values: chart, width: 600, height: 130, area: true, fluid: true, smooth: false, strokeWidth: 2.5, min: 0, max: 130 })}
      </div>
      <p class="label-dash__subhead">${artistsTitle}</p>
      <div class="label-dash__artists">
        ${artists.map((a) => html`<div class="label-dash__artist">
          ${Cover({ tone: a.tone, alt: a.name, radius: 'none' })}
          <div class="label-dash__artist-body">
            <p class="label-dash__artist-name">${a.name}</p>
            <p class="label-dash__artist-meta">${a.meta}</p>
          </div>
        </div>`)}
      </div>
    </div>
  </div>`;
}
