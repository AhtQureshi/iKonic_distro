import { html, cx } from '../../../utils/html.js';
import { Button, Cover, Icon, Logo, Pill, Sparkline } from '../../atoms/index.js';
import { MetricCard } from '../MetricCard/MetricCard.js';

/**
 * Laptop with the IKONIC artist dashboard on screen.
 * Built entirely from atoms + MetricCard so it stays in sync with the design system.
 */
export function DashboardMockup({
  user = 'Nova Rae',
  tagline = 'Your music. Your business. All in one place.',
  nav = [],
  stats = [],
  chart = { values: [], ranges: [], activeRange: '', tooltip: null, labels: [] },
  releases = [],
  className = '',
} = {}) {
  return html`<div class="${cx('dashboard-mockup', className)}" aria-hidden="true">
    <div class="dashboard-mockup__lid">
      <div class="dashboard-mockup__screen">
        <aside class="dashboard-mockup__side">
          ${Logo({ height: 14, className: 'dashboard-mockup__logo' })}
          <ul>
            ${nav.map((item) => html`<li class="${cx('dashboard-mockup__nav', item.active && 'is-active')}">${Icon({ name: item.icon, size: 12 })}${item.label}</li>`)}
          </ul>
        </aside>

        <div class="dashboard-mockup__main">
          <div class="dashboard-mockup__head">
            <div>
              <p class="dashboard-mockup__welcome">Welcome back, ${user}</p>
              <p class="dashboard-mockup__tagline">${tagline}</p>
            </div>
            ${Button({ label: 'Create Release', size: 'sm', className: 'dashboard-mockup__cta', extra: { tabindex: -1 } })}
          </div>

          <div class="dashboard-mockup__stats">
            ${stats.map((s) => MetricCard({ ...s, size: 'sm' }))}
          </div>

          <div class="dashboard-mockup__chart">
            <div class="dashboard-mockup__chart-head">
              <p>Streams</p>
              <div class="dashboard-mockup__ranges">${chart.ranges.map((r) => Pill({ label: r, size: 'sm', active: r === chart.activeRange, className: 'dashboard-mockup__range' }))}</div>
            </div>
            <div class="dashboard-mockup__plot">
              ${Sparkline({ values: chart.values, width: 400, height: 92, area: true, fluid: true, strokeWidth: 2 })}
              ${chart.tooltip && html`<span class="dashboard-mockup__tooltip" style="left:${chart.tooltip.x}%;top:${chart.tooltip.y}%"><b>${chart.tooltip.value}</b>${chart.tooltip.date}</span>`}
            </div>
            <div class="dashboard-mockup__axis">${chart.labels.map((l) => html`<span>${l}</span>`)}</div>
          </div>

          <p class="dashboard-mockup__label">Recent Releases</p>
          <div class="dashboard-mockup__releases">
            ${releases.map((r) => html`<div class="dashboard-mockup__release">
              ${Cover({ tone: r.tone, alt: r.title, radius: 'sm' })}
              <p class="dashboard-mockup__release-title">${r.title}</p>
              <p class="dashboard-mockup__release-artist">${r.artist}</p>
            </div>`)}
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-mockup__base"></div>
  </div>`;
}
