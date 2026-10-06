import { html, cx } from '../../../utils/html.js';
import { Icon, Logo, MiniBars, Trend } from '../../atoms/index.js';

/**
 * Flat publishing dashboard mockup: sidebar nav, stat tiles, monthly bar chart and a top-songs table.
 * Song / top-performer artwork uses `tone` (1-3) gradient swatches.
 */
export function RoyaltyDashboard({
  title,
  range,
  nav = [],
  stats = [],
  top,
  chart = { values: [], months: [], tooltip: null },
  songsTitle,
  songs = [],
  className = '',
} = {}) {
  return html`<div class="${cx('royalty-dashboard', className)}" aria-hidden="true">
    <aside class="royalty-dashboard__side">
      ${Logo({ height: 16, className: 'royalty-dashboard__logo' })}
      <ul class="royalty-dashboard__nav">
        ${nav.map((n) => html`<li class="${cx('royalty-dashboard__nav-item', n.active && 'is-active')}">${Icon({ name: n.icon, size: 15 })}${n.label}</li>`)}
      </ul>
    </aside>

    <div class="royalty-dashboard__main">
      <div class="royalty-dashboard__top">
        <p class="royalty-dashboard__title">${title}</p>
        <span class="royalty-dashboard__select">${range} ${Icon({ name: 'chevron-down', size: 12 })}</span>
      </div>

      <div class="royalty-dashboard__stats">
        ${stats.map((s) => html`<div class="royalty-dashboard__stat">
          <p class="royalty-dashboard__stat-label">${s.label}</p>
          <p class="royalty-dashboard__stat-value">${s.value}</p>
          ${Trend({ value: s.trend })}
        </div>`)}
        ${top && html`<div class="royalty-dashboard__stat royalty-dashboard__stat--top">
          <span class="${cx('royalty-dashboard__art', `royalty-dashboard__art--tone-${top.tone}`)}"></span>
          <div>
            <p class="royalty-dashboard__stat-label">${top.label}</p>
            <p class="royalty-dashboard__song">${top.title}</p>
          </div>
        </div>`}
      </div>

      <div class="royalty-dashboard__chart">
        ${chart.tooltip && html`<span class="royalty-dashboard__tip">${chart.tooltip.value}<small>${chart.tooltip.label}</small></span>`}
        ${MiniBars({ values: chart.values, height: 120, className: 'royalty-dashboard__bars' })}
        <div class="royalty-dashboard__months">${chart.months.map((m) => html`<span>${m}</span>`)}</div>
      </div>

      <div class="royalty-dashboard__table">
        <p class="royalty-dashboard__table-title">${songsTitle}</p>
        ${songs.map((s, i) => html`<div class="royalty-dashboard__row">
          <span class="royalty-dashboard__num">${i + 1}</span>
          <div class="royalty-dashboard__track">
            <span class="${cx('royalty-dashboard__art', 'royalty-dashboard__art--sm', `royalty-dashboard__art--tone-${s.tone}`)}"></span>
            <div><b>${s.title}</b><small>${s.meta}</small></div>
          </div>
          <span class="royalty-dashboard__amount">${s.value}</span>
          ${Trend({ value: s.trend, className: 'royalty-dashboard__pct' })}
        </div>`)}
      </div>
    </div>
  </div>`;
}
