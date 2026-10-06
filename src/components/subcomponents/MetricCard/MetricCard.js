import { html, cx } from '../../../utils/html.js';
import { Icon, MiniBars, Sparkline, Trend } from '../../atoms/index.js';

/**
 * Number + label card. Used for hero floating stats and dashboard KPIs.
 * chart: { type: 'bars' | 'spark', values: number[] }
 * size:  'md' | 'sm'
 * glass: frosted floating style
 */
export function MetricCard({ label, value, trend, icon, chart, size = 'md', glass = false, className = '' } = {}) {
  const small = size === 'sm';
  const chartMarkup = chart && (chart.type === 'bars'
    ? MiniBars({ values: chart.values, height: small ? 18 : 34 })
    : Sparkline({ values: chart.values, width: small ? 60 : 96, height: small ? 18 : 34 }));

  return html`<div class="${cx('metric-card', `metric-card--${size}`, glass && 'metric-card--glass', className)}">
    ${icon && html`<span class="metric-card__icon">${Icon({ name: icon, size: small ? 14 : 18 })}</span>`}
    <div class="metric-card__body">
      <p class="metric-card__label">${label}</p>
      <div class="metric-card__row">
        <div>
          <p class="metric-card__value" data-count>${value}</p>
          ${trend && Trend({ value: trend, size: small ? 'sm' : 'md' })}
        </div>
        ${chartMarkup && html`<div class="metric-card__chart">${chartMarkup}</div>`}
      </div>
    </div>
  </div>`;
}
