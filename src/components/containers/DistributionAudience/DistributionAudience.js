import { html } from '../../../utils/html.js';
import { audience } from '../../../data/distribution.js';
import { PhoneMockup, SectionHeading, StatTile } from '../../subcomponents/index.js';

/** "Your Music. Everywhere Fans Listen." — phone with delivery status beside a 2x2 stat grid. */
export function DistributionAudience(content = audience) {
  return html`<section class="distribution-audience">
    <div class="container distribution-audience__grid">
      <div data-reveal="left">${PhoneMockup(content.phone)}</div>
      <div>
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
        <div class="distribution-audience__stats" data-reveal="up" data-reveal-delay="250">
          ${content.stats.map((s) => StatTile({ ...s, className: 'distribution-audience__stat' }))}
        </div>
      </div>
    </div>
  </section>`;
}
