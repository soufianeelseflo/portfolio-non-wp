'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const ALL = 'All';

export default function WorkGallery({ initialRepos = [] }) {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState(ALL);

  const repos = useMemo(() => {
    return [...initialRepos].sort((a, b) => {
      if (!a.updated_at || !b.updated_at) return 0;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
  }, [initialRepos]);

  const languages = useMemo(() => {
    const set = new Set([ALL]);
    repos.forEach((repo) => {
      if (repo.language) {
        set.add(repo.language);
      }
    });
    return Array.from(set);
  }, [repos]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return repos.filter((repo) => {
      const matchesQuery = !q
        || repo.name?.toLowerCase().includes(q)
        || repo.description?.toLowerCase().includes(q)
        || repo.topics?.some((topic) => topic.toLowerCase().includes(q));
      const matchesLanguage = language === ALL || repo.language === language;
      return matchesQuery && matchesLanguage;
    });
  }, [repos, query, language]);

  return (
    <section aria-live="polite" className="mt-8 space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex w-full flex-col gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Search projects
          <input
            type="search"
            name="search"
            placeholder="Search by name, description, or topic"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-gray-700/70 dark:bg-gray-900"
          />
        </label>
        <label className="flex w-full flex-col gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-56">
          Filter by language
          <select
            name="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-gray-700/70 dark:bg-gray-900"
          >
            {languages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Showing {filtered.length} project{filtered.length === 1 ? '' : 's'}
        {language !== ALL && ` · ${language}`}
        {query && ` · “${query}”`}
      </p>

      {filtered.length === 0 ? (
        <div className="card p-6 text-sm text-gray-600 dark:text-gray-300">
          <p>No projects match your filters yet. Try clearing the search or choosing a different language.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 15).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}
