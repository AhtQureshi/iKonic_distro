import { cta } from '../../../data/publishing.js';
import { Button } from '../../atoms/index.js';
import { SectionIntro } from '../../subcomponents/index.js';

/** Closing call to action on a red-glow band. */
export function PublishingCta({ content = cta }) {
  const actions = <div className="publishing-cta__actions">{content.actions.map((a) => <Button key={a.label} {...a} />)}</div>;
  return (
    <section className="publishing-cta">
      <div className="container">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} extra={actions} />
      </div>
    </section>
  );
}
