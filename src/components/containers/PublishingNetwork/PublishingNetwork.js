import { html } from '../../../utils/html.js';
import { network } from '../../../data/publishing.js';
import { SectionIntro, StatTile } from '../../subcomponents/index.js';

/** "Connected Worldwide." — intro, glowing globe and network stats. */
export function PublishingNetwork(content = network) {
  return html`<section class="publishing-network">
    <div class="container publishing-network__grid">
      ${SectionIntro({ eyebrow: content.eyebrow, title: content.title, text: content.text, action: content.action })}
      <div class="publishing-network__globe-wrap" data-reveal="zoom" data-reveal-delay="150">
        <span class="publishing-network__globe" aria-hidden="true"></span>
      </div>
      <div class="publishing-network__stats" data-reveal-stagger="left" data-reveal-delay="250">
        ${content.stats.map((s) => StatTile({ ...s, className: 'publishing-network__stat' }))}
      </div>
    </div>
  </section>`;
}
