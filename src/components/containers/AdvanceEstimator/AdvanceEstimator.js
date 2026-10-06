import { html } from '../../../utils/html.js';
import { $ } from '../../../utils/dom.js';
import { estimator } from '../../../data/advance.js';
import { Button, RangeSlider, updateRangeFill } from '../../atoms/index.js';
import { DetailRows, SectionHeading } from '../../subcomponents/index.js';

const money = (n) => '$' + n.toLocaleString('en-US');

/** Advance estimator: drag the monthly royalties slider to see an estimated advance. */
export function AdvanceEstimator(content = estimator) {
  const { input, result } = content;
  const estimate = Math.round((input.value * content.multiplier) / content.round) * content.round;
  return html`<section class="section advance-estimator" data-advance-estimator data-multiplier="${content.multiplier}" data-round="${content.round}">
    <div class="container">
      <div class="advance-estimator__grid">
        <div class="advance-estimator__head">${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}</div>
        <div class="advance-estimator__card" data-reveal="up" data-reveal-delay="150">
          <label class="advance-estimator__label" for="advance-royalties">${input.label}</label>
          <output class="advance-estimator__input" for="advance-royalties" data-estimator-royalties>${money(input.value)}</output>
          ${RangeSlider({ id: 'advance-royalties', min: input.min, max: input.max, step: input.step, value: input.value, label: 'Average monthly royalties' })}
          <div class="advance-estimator__range-labels"><span>${input.minLabel}</span><span>${input.maxLabel}</span></div>
        </div>
        <div class="advance-estimator__card" data-reveal="up" data-reveal-delay="300">
          <p class="advance-estimator__amount-label">${result.label}</p>
          <p class="advance-estimator__amount"><span data-estimator-amount aria-live="polite">${money(estimate)}</span><i class="advance-estimator__info" title="${result.info}">i</i></p>
          <div class="advance-estimator__terms">
            <p class="advance-estimator__terms-title">${result.termsTitle}</p>
            ${DetailRows({ rows: result.rows, className: 'advance-estimator__rows' })}
          </div>
          ${Button(result.action)}
        </div>
      </div>
      <p class="advance-estimator__note">${content.note}</p>
    </div>
  </section>`;
}

/** Wire every estimator in root: update the royalties readout, advance amount and slider fill. */
export function setupAdvanceEstimator(root = document) {
  root.querySelectorAll('[data-advance-estimator]').forEach((section) => {
    const range = $('input[type=range]', section);
    const royalties = $('[data-estimator-royalties]', section);
    const amount = $('[data-estimator-amount]', section);
    const multiplier = Number(section.dataset.multiplier);
    const round = Number(section.dataset.round);
    const update = () => {
      const v = parseInt(range.value, 10);
      royalties.textContent = money(v);
      amount.textContent = money(Math.round((v * multiplier) / round) * round);
      updateRangeFill(range);
    };
    range.addEventListener('input', update);
    update();
  });
}
