'use client';

import { useState } from 'react';

export default function AboutStory({ principles }) {
  const [showMore, setShowMore] = useState(false);
  const detailsId = 'about-story-details';

  return (
    <div className="card p-6 space-y-4">
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        I’m <span className="bg-gradient-to-r from-brand-400 to-brand-700 bg-clip-text text-transparent font-semibold">Sofiane&nbsp;El&nbsp;Habib</span>, a front-end developer focused on crafting considered, inclusive interfaces. I balance systems thinking with a love for crisp typography, predictable spacing, and gentle motion.
      </p>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        My approach: keep components small, name things clearly, and measure the results. From wireframes to production, I iterate quickly without leaving performance or accessibility behind.
      </p>

      <div id={detailsId} hidden={!showMore} className="space-y-3">
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          Outside of client work I explore design systems, improve dev tooling, and study systems design. I enjoy constraints: they force honest trade-offs and better collaboration. I read docs, inspect network waterfalls, and use analytics to confirm wins.
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300">
          {principles.map((principle) => (
            <li key={principle} className="flex gap-2">
              <span aria-hidden>•</span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="btn"
        type="button"
        aria-expanded={showMore}
        aria-controls={detailsId}
        onClick={() => setShowMore((value) => !value)}
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}
