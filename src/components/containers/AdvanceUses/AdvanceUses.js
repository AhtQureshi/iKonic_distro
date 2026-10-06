import { html } from '../../../utils/html.js';
import { uses } from '../../../data/advance.js';
import { SectionHeading, UseCaseCard } from '../../subcomponents/index.js';

/** "Fuel Your Next Chapter." — four ways to spend an advance. */
export function AdvanceUses(content = uses) {
  return html`<section class="section advance-uses">
    <div class="container">
      ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
      <div class="advance-uses__grid" data-reveal-stagger="up" data-reveal-step="110">${content.cards.map((c) => UseCaseCard(c))}</div>
    </div>
  </section>`;
}
