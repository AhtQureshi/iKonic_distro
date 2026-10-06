import { html, cx } from '../../../utils/html.js';
import { compare } from '../../../data/pricing.js';
import { Icon } from '../../atoms/index.js';

const cell = (value) => {
  if (value === true) return html`<span class="pricing-compare__yes" aria-label="Included">✓</span>`;
  if (value === false) return html`<span class="pricing-compare__no" aria-label="Not included">–</span>`;
  return html`<span class="pricing-compare__num">${value}</span>`;
};

/** Feature-by-plan comparison table; the `highlight` column is tinted red. Scrolls sideways on small screens. */
export function PricingCompare(content = compare) {
  const hi = (i) => i === content.highlight && 'pricing-compare__hi';
  return html`<section class="pricing-compare">
    <div class="container">
      <div class="pricing-compare__card" data-reveal="up">
        <div class="pricing-compare__scroll">
          <table class="pricing-compare__table">
            <thead>
              <tr><th scope="col">${content.label}</th>${content.columns.map((c, i) => html`<th scope="col" class="${cx(hi(i))}">${c}</th>`)}</tr>
            </thead>
            <tbody>
              ${content.rows.map((row) => html`<tr>
                <th scope="row"><span class="pricing-compare__icon">${Icon({ name: row.icon, size: 13 })}</span>${row.label}</th>
                ${row.values.map((v, i) => html`<td class="${cx(hi(i))}">${cell(v)}</td>`)}
              </tr>`)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>`;
}
