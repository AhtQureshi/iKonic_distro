'use client';

import { useState } from 'react';
import { estimator } from '../../../data/advance.js';
import { Button, RangeSlider } from '../../atoms/index.js';
import { DetailRows, SectionHeading } from '../../subcomponents/index.js';

const money = (n) => '$' + n.toLocaleString('en-US');

/** Advance estimator: drag the monthly royalties slider to see an estimated advance. */
export function AdvanceEstimator({ content = estimator }) {
  const { input, result } = content;
  const [value, setValue] = useState(input.value);
  const estimate = Math.round((value * content.multiplier) / content.round) * content.round;

  return (
    <section className="section advance-estimator" data-advance-estimator data-multiplier={content.multiplier} data-round={content.round}>
      <div className="container">
        <div className="advance-estimator__grid">
          <div className="advance-estimator__head">
            <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
          </div>
          <div className="advance-estimator__card" data-reveal="up" data-reveal-delay="150">
            <label className="advance-estimator__label" htmlFor="advance-royalties">{input.label}</label>
            <output className="advance-estimator__input" htmlFor="advance-royalties" data-estimator-royalties>{money(value)}</output>
            <RangeSlider
              id="advance-royalties"
              min={input.min}
              max={input.max}
              step={input.step}
              value={value}
              label="Average monthly royalties"
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <div className="advance-estimator__range-labels"><span>{input.minLabel}</span><span>{input.maxLabel}</span></div>
          </div>
          <div className="advance-estimator__card" data-reveal="up" data-reveal-delay="300">
            <p className="advance-estimator__amount-label">{result.label}</p>
            <p className="advance-estimator__amount">
              <span data-estimator-amount aria-live="polite">{money(estimate)}</span>
              <i className="advance-estimator__info" title={result.info}>i</i>
            </p>
            <div className="advance-estimator__terms">
              <p className="advance-estimator__terms-title">{result.termsTitle}</p>
              <DetailRows rows={result.rows} className="advance-estimator__rows" />
            </div>
            <Button {...result.action} />
          </div>
        </div>
        <p className="advance-estimator__note">{content.note}</p>
      </div>
    </section>
  );
}
