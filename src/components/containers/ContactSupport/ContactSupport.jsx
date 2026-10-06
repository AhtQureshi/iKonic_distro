'use client';

import { useEffect, useRef, useState } from 'react';
import { cx, rich } from '../../../utils/cx.js';
import { support } from '../../../data/contact.js';
import { Button } from '../../atoms/index.js';
import { ContactForm, IconCard, SectionHeading } from '../../subcomponents/index.js';

/**
 * "Still Need Help? Contact Our Support Team." — copy + button beside three support cards (chat, email, hours).
 * The button opens the contact form underneath.
 */
export function ContactSupport({ content = support }) {
  const [formOpen, setFormOpen] = useState(false);
  const formRef = useRef(null);

  // Bring the form into view when it opens, and open it when someone lands on /contact#message.
  useEffect(() => {
    if (formOpen) formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [formOpen]);
  useEffect(() => {
    if (window.location.hash === '#message') setFormOpen(true);
  }, []);

  return (
    <section className="section section--divided contact-support" id={content.id}>
      <div className="container">
        <div className="contact-support__layout">
          <div className="contact-support__copy">
            <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
            <div data-reveal="up" data-reveal-delay="300">
              <Button
                label={formOpen ? content.action.closeLabel : content.action.label}
                iconRight={formOpen ? undefined : 'arrow-right'}
                aria-expanded={formOpen}
                aria-controls="message"
                onClick={() => setFormOpen(!formOpen)}
              />
            </div>
          </div>
          <div className="contact-support__cards" data-reveal-stagger="up" data-reveal-step="110">
            {content.cards.map((c) => (
              <IconCard key={c.title} icon={c.icon} title={c.title} text={c.hours ? undefined : c.text} size="sm" className="contact-support__card">
                {c.hours && <p className="contact-support__hours" {...rich(c.hours)} />}
                {c.hours && <p className="icon-card__text" {...rich(c.text)} />}
                {c.badge && (c.badge.href
                  ? <a className="contact-support__badge" href={c.badge.href}>{c.badge.label}</a>
                  : (
                    <span className={cx('contact-support__badge', c.badge.live && 'contact-support__badge--live')}>
                      {c.badge.live && <span className="contact-support__dot" aria-hidden="true" />}
                      {c.badge.label}
                    </span>
                  ))}
              </IconCard>
            ))}
          </div>
        </div>

        <div className="contact-support__form" id="message" ref={formRef} hidden={!formOpen}>
          <ContactForm content={content.form} />
        </div>
      </div>
    </section>
  );
}
