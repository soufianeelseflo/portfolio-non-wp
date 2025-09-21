import { ArrowUpRight, Star } from 'lucide-react';

export default function ProjectCard({
  name,
  description,
  html_url,
  homepage,
  language,
  topics = [],
  stargazers_count = 0,
  updated_at
}) {
  const destination = homepage || html_url;
  const hasStars = Number.isFinite(stargazers_count) && stargazers_count > 0;
  const formattedUpdate = updated_at
    ? new Date(updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : null;
  return (
    <article className="card group h-full p-5 transition hover:shadow-lg">
      <a
        href={destination}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`View ${name} project`}
        className="flex h-full flex-col gap-4"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description || 'No description provided.'}
            </p>
          </div>
          <ArrowUpRight className="opacity-60 transition group-hover:opacity-100" />
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {language && <span>{language}</span>}
          {hasStars && (
            <span className="inline-flex items-center gap-1">
              <Star className="h-3 w-3" aria-hidden /> {stargazers_count}
            </span>
          )}
          {formattedUpdate && (
            <time dateTime={updated_at}>Updated {formattedUpdate}</time>
          )}
          <span className="inline-flex items-center gap-1">
            Visit <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
        {topics?.length ? (
          <ul className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500">
            {topics.slice(0, 4).map((topic) => (
              <li key={topic} className="rounded-full border border-gray-200 px-2 py-1 dark:border-gray-800">
                {topic}
              </li>
            ))}
          </ul>
        ) : null}
      </a>
    </article>
  );
}
