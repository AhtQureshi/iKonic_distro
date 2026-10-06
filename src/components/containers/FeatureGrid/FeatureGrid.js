import { html, cx } from '../../../utils/html.js';
import { features } from '../../../data/home.js';
import { FeatureCard, SectionHeading } from '../../subcomponents/index.js';

/** "More Than Distribution." — four product feature cards. The heading is optional (omit `title`). */
export function FeatureGrid(content = features) {
  return html`<section class="${cx('section feature-grid', !content.title && 'feature-grid--bare')}">
    <div class="container">
      ${content.title && SectionHeading({ eyebrow: content.eyebrow, title: content.title })}
      <div class="feature-grid__cards" data-reveal-stagger="up" data-reveal-step="110">${content.items.map((f) => FeatureCard(f))}</div>
    </div>
  </section>`;
}
