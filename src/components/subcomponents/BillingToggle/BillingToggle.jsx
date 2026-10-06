'use client';

import { useState } from 'react';
import { cx } from '../../../utils/cx.js';
import { useBilling } from './BillingContext.jsx';

/**
 * Segmented Monthly / Annual switch with an optional "save" note beside it.
 * Inside a BillingProvider it drives every PlanCard in that provider; otherwise it keeps its own state.
 */
export function BillingToggle({ label = 'Billing period', options = [], active, save, className = '' }) {
  const shared = useBilling();
  const [own, setOwn] = useState(active ?? options[0]?.value);
  const current = shared ? shared.billing : own;
  const setCurrent = shared ? shared.setBilling : setOwn;

  return (
    <div className={cx('billing-toggle', className)}>
      <div className="billing-toggle__switch" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            className={cx('billing-toggle__option', o.value === current && 'is-on')}
            data-value={o.value}
            aria-pressed={o.value === current}
            onClick={() => setCurrent(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
      {save && <span className="billing-toggle__save">{save}</span>}
    </div>
  );
}
