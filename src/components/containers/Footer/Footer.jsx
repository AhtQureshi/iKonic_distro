import { footer, socials } from '../../../data/site.js';
import { Logo } from '../../atoms/index.js';
import { LinkList, SocialLinks } from '../../subcomponents/index.js';

/** Site footer: brand, links, socials, legal. */
export function Footer({ content = footer }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top" data-reveal="fade">
          <div className="site-footer__brand">
            <Logo href="/" height={30} />
            <p>{content.tagline}</p>
          </div>
          <LinkList items={content.links} label="Footer" className="site-footer__links" />
          <SocialLinks items={socials} />
        </div>
        <div className="site-footer__bottom">
          <p>{content.copyright}</p>
          <LinkList items={content.legal} label="Legal" className="site-footer__legal" />
        </div>
      </div>
    </footer>
  );
}
