import { html } from '../../../utils/html.js';
import { partners } from '../../../data/publishing.js';
import { SectionIntro, SocietyTile } from '../../subcomponents/index.js';

/** "Trusted. Connected. Worldwide." — grid of collecting-society partners. */
export function PublishingPartners(content = partners) {
  return html`<section class="publishing-partners">
    <div class="container">
      ${SectionIntro({ eyebrow: content.eyebrow, title: content.title, text: content.text })}
      <div class="publishing-partners__grid" data-reveal-stagger="up" data-reveal-step="60">
        ${content.items.map((p) => SocietyTile(p))}
      </div>
    </div>
  </section>`;
}
