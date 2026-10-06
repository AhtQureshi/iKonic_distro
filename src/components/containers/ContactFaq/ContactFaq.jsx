'use client';

import { Fragment, useRef, useState } from 'react';
import { cx, rich } from '../../../utils/cx.js';
import { faq } from '../../../data/contact.js';
import { Button, Icon } from '../../atoms/index.js';
import { Accordion, SectionHeading } from '../../subcomponents/index.js';

const toItems = (items) => items.map((item) => ({ question: item.q, answer: item.a }));

/**
 * "Quick Answers to Common Questions." — category tabs on the left, that category's questions on the right.
 * "View All FAQs" lists every category at once.
 */
export function ContactFaq({ content = faq }) {
  const { categories } = content;
  const [active, setActive] = useState(categories[0]?.id); // a category id, or 'all'
  const tabs = useRef([]);
  const current = categories.find((c) => c.id === active);

  // Arrow keys move between tabs (standard tablist keyboard pattern)
  const onKeyDown = (e, i) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (i + step + categories.length) % categories.length;
    setActive(categories[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <section className="section section--divided contact-faq" id={content.id}>
      <div className="container">
        <div className="contact-faq__head">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} className="contact-faq__heading" />
          <div data-reveal="up" data-reveal-delay="300">
            <Button
              label={content.allLabel}
              variant="outline"
              iconRight="arrow-right"
              aria-pressed={active === 'all'}
              onClick={() => setActive('all')}
            />
          </div>
        </div>

        <div className="contact-faq__layout">
          <div className="contact-faq__cats" role="tablist" aria-label="FAQ categories" aria-orientation="vertical" data-reveal="up">
            {categories.map((c, i) => (
              <button
                key={c.id}
                ref={(el) => { tabs.current[i] = el; }}
                type="button"
                role="tab"
                id={`faq-tab-${c.id}`}
                aria-selected={active === c.id}
                aria-controls="faq-panel"
                tabIndex={active === c.id || (active === 'all' && i === 0) ? 0 : -1}
                className={cx('contact-faq__cat', active === c.id && 'is-active')}
                onClick={() => setActive(c.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <Icon name={c.icon} size={22} />
                <span {...rich(c.label)} />
              </button>
            ))}
          </div>

          <div className="contact-faq__panel" id="faq-panel" role="tabpanel" aria-labelledby={current ? `faq-tab-${current.id}` : undefined} aria-live="polite">
            {active === 'all'
              ? categories.map((c) => (
                <Fragment key={c.id}>
                  <p className="contact-faq__group" {...rich(c.label)} />
                  <Accordion items={toItems(c.items)} className="contact-faq__list" />
                </Fragment>
              ))
              // key = category, so switching resets which question is open
              : current && <Accordion key={current.id} items={toItems(current.items)} className="contact-faq__list" />}
          </div>
        </div>
      </div>
    </section>
  );
}
