import { image } from '../../../utils/assets.js';
import { cta } from '../../../data/publishing.js';
import { Button, Img } from '../../atoms/index.js';
import { SectionIntro } from '../../subcomponents/index.js';

/** Closing call to action over a zoomed-in crop of the publishing banner (album art + dashboard), copy on the left. */
export function PublishingCta({ content = cta }) {
  const actions = <div className="publishing-cta__actions">{content.actions.map((a) => <Button key={a.label} {...a} />)}</div>;
  return (
    <section className="publishing-cta">
      {content.image && <Img src={image(content.image.file)} width={content.image.width} height={content.image.height} className="publishing-cta__bg" />}
      <div className="container">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} text={content.text} extra={actions} />
      </div>
    </section>
  );
}
