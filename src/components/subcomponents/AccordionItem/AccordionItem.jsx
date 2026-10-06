'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { cx, rich } from '../../../utils/cx.js';

/**
 * One question / answer row of an accordion (FAQ).
 * Controlled by Accordion (open + onToggle) so opening one item closes the others;
 * used on its own it keeps its own open state.
 */
export function AccordionItem({ question, answer, open: controlledOpen, onToggle, className = '' }) {
  const [ownOpen, setOwnOpen] = useState(Boolean(controlledOpen));
  const open = onToggle ? Boolean(controlledOpen) : ownOpen;
  const panel = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (open && panel.current) setHeight(panel.current.scrollHeight);
  }, [open]);

  return (
    <div className={cx('accordion-item', open && 'is-open', className)}>
      <button type="button" className="accordion-item__q" aria-expanded={open} onClick={onToggle || (() => setOwnOpen(!ownOpen))}>
        <span>{question}</span><span className="accordion-item__x" aria-hidden="true">+</span>
      </button>
      <div className="accordion-item__a" ref={panel} style={open ? { maxHeight: `${height}px` } : undefined}>
        <p {...rich(answer)} />
      </div>
    </div>
  );
}
