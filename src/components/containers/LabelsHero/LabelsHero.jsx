import { rich } from '../../../utils/cx.js';
import { labelsHero } from '../../../data/labels.js';
import { Button, Eyebrow, Heading, Icon, Text } from '../../atoms/index.js';
import { LabelSummaryCard } from '../../subcomponents/index.js';

/** Labels hero: headline + CTAs, label summary card and four feature bullets. */
export function LabelsHero({ content = labelsHero }) {
  return (
    <section className="labels-hero" aria-labelledby="labels-hero-title">
      <div className="container">
        <div className="labels-hero__grid">
          <div className="labels-hero__copy" data-reveal-stagger="up" data-reveal-step="120">
            <Eyebrow text={content.eyebrow} />
            <Heading text={content.title} level={1} size="h1" id="labels-hero-title" className="labels-hero__title" />
            <Text text={content.text} size="lg" className="labels-hero__text" />
            <div className="labels-hero__actions">{content.actions.map((a) => <Button key={a.label} {...a} />)}</div>
          </div>
          <div data-reveal="zoom" data-reveal-delay="300"><LabelSummaryCard {...content.summary} /></div>
        </div>
        <ul className="labels-hero__bullets" data-reveal-stagger="up" data-reveal-delay="400" data-reveal-step="100">
          {content.bullets.map((b) => (
            <li className="labels-hero__bullet" key={b.text}><Icon name={b.icon} size={46} /><p {...rich(b.text)} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
