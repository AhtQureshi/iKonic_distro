import { html } from '../../../utils/html.js';
import { illustration } from '../../../utils/assets.js';
import { cta } from '../../../data/home.js';
import { Button, Img } from '../../atoms/index.js';
import { SectionHeading, SocialProof } from '../../subcomponents/index.js';

/**
 * Closing call to action over a stage-lit crowd.
 * Optional `variant: 'boxed'` renders a rounded glowing card instead (copy left, buttons right, no crowd / proof).
 */
export function CtaBanner(content = cta) {
  if (content.variant === 'boxed') {
    return html`<section class="cta-banner-boxed">
      <div class="container">
        <div class="cta-banner-boxed__card" data-reveal="up">
          ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text, size: 'display', className: 'cta-banner-boxed__copy' })}
          <div class="cta-banner-boxed__actions">${content.actions.map((a) => Button(a))}</div>
        </div>
      </div>
    </section>`;
  }
  return html`<section class="cta-banner">
    ${Img({ src: illustration('crowd'), alt: '', className: 'cta-banner__crowd' })}
    <div class="container cta-banner__inner">
      <div class="cta-banner__copy">
        ${SectionHeading({ eyebrow: content.eyebrow, title: content.title, text: content.text, size: 'display' })}
        <div class="cta-banner__actions" data-reveal="up" data-reveal-delay="350">${content.actions.map((a) => Button(a))}</div>
      </div>
      <div class="cta-banner__proof" data-reveal="right" data-reveal-delay="450">${SocialProof(content.proof)}</div>
    </div>
  </section>`;
}
