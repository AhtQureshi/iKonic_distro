import { html } from '../../../utils/html.js';
import { labelsHero } from '../../../data/labels.js';
import { Button, Eyebrow, Heading, Icon, Text } from '../../atoms/index.js';
import { LabelSummaryCard } from '../../subcomponents/index.js';

/** Labels hero: headline + CTAs, label summary card and four feature bullets. */
export function LabelsHero(content = labelsHero) {
  return html`<section class="labels-hero" aria-labelledby="labels-hero-title">
    <div class="container">
      <div class="labels-hero__grid">
        <div class="labels-hero__copy" data-reveal-stagger="up" data-reveal-step="120">
          ${Eyebrow({ text: content.eyebrow })}
          ${Heading({ text: content.title, level: 1, size: 'h1', id: 'labels-hero-title', className: 'labels-hero__title' })}
          ${Text({ text: content.text, size: 'lg', className: 'labels-hero__text' })}
          <div class="labels-hero__actions">${content.actions.map((a) => Button(a))}</div>
        </div>
        <div data-reveal="zoom" data-reveal-delay="300">${LabelSummaryCard(content.summary)}</div>
      </div>
      <ul class="labels-hero__bullets" data-reveal-stagger="up" data-reveal-delay="400" data-reveal-step="100">
        ${content.bullets.map((b) => html`<li class="labels-hero__bullet">${Icon({ name: b.icon, size: 46 })}<p>${b.text}</p></li>`)}
      </ul>
    </div>
  </section>`;
}
