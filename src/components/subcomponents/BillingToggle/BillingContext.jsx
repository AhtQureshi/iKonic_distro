'use client';

import { createContext, useContext, useState } from 'react';

const BillingContext = createContext(null);

/**
 * Shares the Monthly / Annual choice between a BillingToggle and the PlanCards
 * that follow it, even when they live in different page sections.
 */
export function BillingProvider({ initial = 'monthly', children }) {
  const [billing, setBilling] = useState(initial);
  return <BillingContext.Provider value={{ billing, setBilling }}>{children}</BillingContext.Provider>;
}

/** { billing, setBilling }, or null outside a BillingProvider. */
export function useBilling() {
  return useContext(BillingContext);
}
