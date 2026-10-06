import { partners } from '../../../data/publishing.js';
import { SectionIntro, SocietyTile } from '../../subcomponents/index.js';

/** "Trusted. Connected. Worldwide." — grid of collecting-society partners. */
export function PublishingPartners({ content = partners }) {
  return (
    <section className="publishing-partners">
      <div className="container">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} />
        <div className="publishing-partners__grid" data-reveal-stagger="up" data-reveal-step="60">
          {content.items.map((p) => <SocietyTile key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}
