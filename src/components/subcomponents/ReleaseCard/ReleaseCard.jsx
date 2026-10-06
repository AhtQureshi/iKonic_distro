import { cx } from '../../../utils/cx.js';
import { Anchor, Cover, PlayButton } from '../../atoms/index.js';

/**
 * Album / single tile with play overlay. `type` is used by filters (e.g. 'album' | 'single').
 * `hidden` sets the hidden attribute on the card (filtered out but kept mounted).
 */
export function ReleaseCard({ title, artist, tone, src, type = 'single', href = '#', hidden = false, className = '' }) {
  return (
    <article className={cx('release-card', className)} data-type={type} hidden={hidden || undefined}>
      <Anchor className="release-card__link" href={href} aria-label={`Play ${title} by ${artist}`}>
        <div className="release-card__media">
          <Cover tone={tone} src={src} alt={`${title} cover`} radius="none" />
          <PlayButton size={40} className="release-card__play" />
        </div>
        <div className="release-card__meta">
          <p className="release-card__title">{title}</p>
          <p className="release-card__artist">{artist}</p>
        </div>
      </Anchor>
    </article>
  );
}
