import { html } from '../../../utils/html.js';
import { $, $$ } from '../../../utils/dom.js';
import { releases } from '../../../data/home.js';
import { IconButton } from '../../atoms/index.js';
import { FilterPills, ReleaseCard, SectionHeading, setupFilterPills } from '../../subcomponents/index.js';

/** Filterable, horizontally scrolling row of release cards. Filters are optional (omit `filters`). */
export function LatestReleases(content = releases) {
  return html`<section class="section section--tight latest-releases" data-releases>
    <div class="container">
      <div class="latest-releases__head">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title })}
        <div class="latest-releases__controls" data-reveal="left" data-reveal-delay="200">
          ${content.filters && FilterPills({ options: content.filters, active: 'all', label: 'Filter releases' })}
          <div class="latest-releases__arrows">
            ${IconButton({ icon: 'arrow-left', label: 'Previous releases', extra: { 'data-scroll': '-1' } })}
            ${IconButton({ icon: 'arrow-right', label: 'Next releases', extra: { 'data-scroll': '1' } })}
          </div>
        </div>
      </div>
      <div class="latest-releases__track" data-reveal-stagger="up" data-reveal-step="70" data-track tabindex="0" aria-label="Releases">
        ${content.items.map((r) => ReleaseCard(r))}
      </div>
    </div>
  </section>`;
}

export function setupLatestReleases(root = document) {
  const section = $('[data-releases]', root);
  if (!section) return;
  const track = $('[data-track]', section);
  const [prev, next] = $$('[data-scroll]', section);

  const updateArrows = () => {
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  };

  $$('[data-scroll]', section).forEach((btn) => {
    btn.addEventListener('click', () => {
      track.scrollBy({ left: Number(btn.dataset.scroll) * track.clientWidth * 0.8, behavior: 'smooth' });
    });
  });

  const pills = $('.filter-pills', section);
  if (pills) setupFilterPills(pills, (value) => {
    $$('.release-card', track).forEach((card) => {
      card.hidden = value !== 'all' && card.dataset.type !== value;
    });
    track.scrollTo({ left: 0 });
    updateArrows();
  });

  track.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();
}
