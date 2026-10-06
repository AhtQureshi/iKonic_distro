import { html } from '../../../utils/html.js';
import { labelsCta } from '../../../data/labels.js';
import { Button, Icon } from '../../atoms/index.js';
import { SectionHeading } from '../../subcomponents/index.js';

/** Closing banner: "Build Your Label. Go Further." with CTAs and three headline stats. */
export function LabelsCta(content = labelsCta) {
  return html`<section class="labels-cta">
    <div class="container">
      <div class="labels-cta__banner">
        <div class="labels-cta__grid">
          <div>
            ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
            <div class="labels-cta__actions" data-reveal="up" data-reveal-delay="350">${content.actions.map((a) => Button(a))}</div>
          </div>
          <div class="labels-cta__stats" data-reveal-stagger="up" data-reveal-delay="300" data-reveal-step="120">
            ${content.stats.map((s) => html`<div class="labels-cta__stat">
              ${Icon({ name: s.icon, size: 36 })}
              <div>
                <p class="labels-cta__value" data-count>${s.value}</p>
                <p class="labels-cta__label">${s.label}</p>
              </div>
            </div>`)}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
