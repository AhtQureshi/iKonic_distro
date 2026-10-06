import { html } from '../../../utils/html.js';
import { earn } from '../../../data/publishing.js';
import { IncomeSourceCard, SectionIntro } from '../../subcomponents/index.js';

/** "Your Music Earns Everywhere." — intro beside a grid of royalty income sources. */
export function PublishingEarn(content = earn) {
  return html`<section class="publishing-earn">
    <div class="container publishing-earn__grid">
      ${SectionIntro({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
      <div class="publishing-earn__cards" data-reveal-stagger="up" data-reveal-step="80">
        ${content.items.map((i) => IncomeSourceCard(i))}
      </div>
    </div>
  </section>`;
}
