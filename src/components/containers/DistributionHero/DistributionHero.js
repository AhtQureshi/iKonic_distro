import { html } from '../../../utils/html.js';
import { hero } from '../../../data/distribution.js';
import { Button, Eyebrow, Heading, Text } from '../../atoms/index.js';
import { MetricCard, ReleaseStatus, StoreStatusList, TitledPoint } from '../../subcomponents/index.js';

/** Distribution hero: headline + CTAs, floating release / store / streams cards, three key points. */
export function DistributionHero(content = hero) {
  return html`<section class="distribution-hero" aria-labelledby="distribution-hero-title">
    <div class="container">
      <div class="distribution-hero__grid">
        <div class="distribution-hero__copy" data-reveal-stagger="up" data-reveal-step="120">
          ${Eyebrow({ text: content.eyebrow })}
          ${Heading({ text: content.title, level: 1, size: 'h1', id: 'distribution-hero-title' })}
          ${Text({ text: content.text, size: 'lg', className: 'distribution-hero__text' })}
          <div class="distribution-hero__actions">${content.actions.map((a) => Button(a))}</div>
        </div>

        <div class="distribution-hero__visual" aria-hidden="true" data-reveal-stagger="zoom" data-reveal-delay="300" data-reveal-step="160">
          ${ReleaseStatus({ ...content.release, className: 'distribution-hero__float distribution-hero__float--release' })}
          <div class="distribution-hero__float distribution-hero__float--stores">${StoreStatusList(content.stores)}</div>
          ${MetricCard({ ...content.streams, glass: true, className: 'distribution-hero__float distribution-hero__float--streams' })}
        </div>
      </div>

      <div class="distribution-hero__points" data-reveal-stagger="up" data-reveal-step="100">
        ${content.points.map((p) => TitledPoint({ ...p, className: 'distribution-hero__point' }))}
      </div>
    </div>
  </section>`;
}
