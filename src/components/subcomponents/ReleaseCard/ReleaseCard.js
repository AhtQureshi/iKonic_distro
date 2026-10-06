import { html, cx } from '../../../utils/html.js';
import { Cover, PlayButton } from '../../atoms/index.js';

/** Album / single tile with play overlay. `type` is used by filters (e.g. 'album' | 'single'). */
export function ReleaseCard({ title, artist, tone, src, type = 'single', href = '#', className = '' } = {}) {
  return html`<article class="${cx('release-card', className)}" data-type="${type}">
    <a class="release-card__link" href="${href}" aria-label="Play ${title} by ${artist}">
      <div class="release-card__media">
        ${Cover({ tone, src, alt: `${title} cover`, radius: 'none' })}
        ${PlayButton({ size: 40, className: 'release-card__play' })}
      </div>
      <div class="release-card__meta">
        <p class="release-card__title">${title}</p>
        <p class="release-card__artist">${artist}</p>
      </div>
    </a>
  </article>`;
}
