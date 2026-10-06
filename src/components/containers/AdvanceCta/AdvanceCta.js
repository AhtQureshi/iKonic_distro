import { html } from '../../../utils/html.js';
import { cta } from '../../../data/advance.js';
import { Button } from '../../atoms/index.js';
import { SectionHeading, StatTile } from '../../subcomponents/index.js';

/** "Get Funded. Go Further." — closing call to action with three stat tiles. */
export function AdvanceCta(content = cta) {
  return html`<section class="advance-cta">
    <div class="container advance-cta__inner">
      ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
      <div class="advance-cta__actions" data-reveal="up" data-reveal-delay="300">${content.actions.map((a) => Button(a))}</div>
      <div class="advance-cta__stats" data-reveal-stagger="up" data-reveal-delay="400" data-reveal-step="110">
        ${content.stats.map((s) => StatTile({ ...s, stacked: true }))}
      </div>
    </div>
  </section>`;
}
