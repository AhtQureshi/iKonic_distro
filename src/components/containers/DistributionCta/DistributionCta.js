import { html } from '../../../utils/html.js';
import { cta } from '../../../data/distribution.js';
import { Button } from '../../atoms/index.js';
import { SectionHeading } from '../../subcomponents/index.js';

/** Closing call to action: glowing rounded banner with headline, buttons and three headline stats. */
export function DistributionCta(content = cta) {
  return html`<section class="distribution-cta">
    <div class="container">
      <div class="distribution-cta__banner">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text, size: 'display' })}
        <div class="distribution-cta__actions" data-reveal="up" data-reveal-delay="300">${content.actions.map((a) => Button(a))}</div>
        <dl class="distribution-cta__stats" data-reveal-stagger="up" data-reveal-delay="400">
          ${content.stats.map((s) => html`<div class="distribution-cta__stat"><dt data-count>${s.value}</dt><dd>${s.label}</dd></div>`)}
        </dl>
      </div>
    </div>
  </section>`;
}
