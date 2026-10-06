'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { releases } from '../../../data/home.js';
import { IconButton } from '../../atoms/index.js';
import { FilterPills, ReleaseCard, SectionHeading } from '../../subcomponents/index.js';

/**
 * Filterable, horizontally scrolling row of release cards. Filters are optional (omit `filters`).
 * Filtered-out cards stay mounted and are only `hidden`, so their scroll-reveal state is kept.
 */
export function LatestReleases({ content = releases }) {
  const [filter, setFilter] = useState('all');
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const trackRef = useRef(null);
  const firstRender = useRef(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
    return () => {
      track.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    trackRef.current.scrollTo({ left: 0 });
    updateArrows();
  }, [filter, updateArrows]);

  const scroll = (direction) => {
    const track = trackRef.current;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="section section--tight latest-releases" data-releases>
      <div className="container">
        <div className="latest-releases__head">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <div className="latest-releases__controls" data-reveal="left" data-reveal-delay="200">
            {content.filters && <FilterPills options={content.filters} active={filter} onChange={setFilter} label="Filter releases" />}
            <div className="latest-releases__arrows">
              <IconButton icon="arrow-left" label="Previous releases" data-scroll="-1" disabled={atStart} onClick={() => scroll(-1)} />
              <IconButton icon="arrow-right" label="Next releases" data-scroll="1" disabled={atEnd} onClick={() => scroll(1)} />
            </div>
          </div>
        </div>
        <div className="latest-releases__track" data-reveal-stagger="up" data-reveal-step="70" data-track tabIndex={0} aria-label="Releases" ref={trackRef}>
          {content.items.map((r) => (
            <ReleaseCard key={r.title} {...r} hidden={filter !== 'all' && (r.type ?? 'single') !== filter} />
          ))}
        </div>
      </div>
    </section>
  );
}
