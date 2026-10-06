'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setupMotion } from '../utils/motion.js';

/** Wires the data-reveal / data-count animations for each page after it renders. */
export function MotionObserver() {
  const pathname = usePathname();
  useEffect(() => setupMotion(document), [pathname]);
  return null;
}
