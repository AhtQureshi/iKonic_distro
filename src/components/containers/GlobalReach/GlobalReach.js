import { html } from '../../../utils/html.js';
import { reach } from '../../../data/home.js';
import { CountryList, SectionHeading, StatTile, WorldMap } from '../../subcomponents/index.js';

/** "Your Music Worldwide." — stats, world map and top-countries list. */
export function GlobalReach(content = reach) {
  return html`<section class="section section--divided global-reach">
    <div class="container global-reach__grid">
      <div class="global-reach__copy">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
        <div class="global-reach__stats" data-reveal-stagger="up" data-reveal-delay="300">${content.stats.map((s) => StatTile(s))}</div>
      </div>
      <div class="global-reach__map" data-reveal="zoom" data-reveal-delay="150">${WorldMap(content.map)}</div>
      <div class="global-reach__countries" data-reveal-stagger="left" data-reveal-step="60" data-reveal-delay="250">${CountryList({ items: content.countries })}</div>
    </div>
  </section>`;
}
