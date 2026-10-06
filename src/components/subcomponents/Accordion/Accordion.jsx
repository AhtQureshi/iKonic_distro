'use client';

import { useState } from 'react';
import { AccordionItem } from '../AccordionItem/AccordionItem.jsx';

/**
 * Group of AccordionItems where opening one closes the others.
 * items: [{ question, answer, open? }]. Extra props (className, data-reveal-*) go on the wrapper.
 */
export function Accordion({ items = [], ...rest }) {
  const [openIndex, setOpenIndex] = useState(() => items.findIndex((item) => item.open));

  return (
    <div data-accordion {...rest}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          className={item.className}
          open={i === openIndex}
          onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
        />
      ))}
    </div>
  );
}
