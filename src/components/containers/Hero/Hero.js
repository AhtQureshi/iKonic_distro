import { html } from '../../../utils/html.js';
import { image } from '../../../utils/assets.js';
import { hero } from '../../../data/home.js';
import { stores } from '../../../data/site.js';
import { Button, Eyebrow, Heading, Img, Text } from '../../atoms/index.js';
import { MetricCard, ReleaseStatus, StoreList } from '../../subcomponents/index.js';

/** Home hero: headline + CTAs, studio photo with floating stat cards, store logos. */
export function Hero(content = hero) {
  return html`<section class="hero" aria-labelledby="hero-title">
    <div class="hero__media">
      ${Img({ src: image(content.image.file), alt: content.image.alt, width: 1983, height: 793, eager: true, className: 'hero__photo' })}
      <div class="hero__floats" data-reveal-stagger="zoom" data-reveal-delay="450" data-reveal-step="160">
        ${ReleaseStatus({ ...content.release, className: 'hero__float hero__float--release' })}
        ${MetricCard({ ...content.advance, glass: true, className: 'hero__float hero__float--advance' })}
        ${MetricCard({ ...content.streams, glass: true, className: 'hero__float hero__float--streams' })}
        ${MetricCard({ ...content.earnings, glass: true, className: 'hero__float hero__float--earnings' })}
      </div>
    </div>

    <div class="container hero__inner">
      <div class="hero__copy" data-reveal-stagger="up" data-reveal-step="120">
        ${Eyebrow({ text: content.eyebrow })}
        ${Heading({ text: content.title, level: 1, size: 'h1', id: 'hero-title' })}
        ${Text({ text: content.text, size: 'lg', tone: 'default', className: 'hero__text' })}
        <div class="hero__actions">${content.actions.map((a) => Button(a))}</div>
      </div>
    </div>

    <div class="container hero__stores" data-reveal="up" data-reveal-delay="700">
      ${StoreList({ stores })}
    </div>
  </section>`;
}
