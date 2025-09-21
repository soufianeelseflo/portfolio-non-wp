import 'server-only';
import { cache } from 'react';

const ONE_HOUR = 60 * 60;
const DEFAULT_USER = 'soufianeelseflo';

const resolveGithubUser = () =>
  process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USER || DEFAULT_USER;

const fetchGithubRepos = cache(async () => {
  const user = resolveGithubUser();
  const headers = {
    Accept: 'application/vnd.github+json'
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${user}/repos?sort=updated&per_page=100`,
    {
      headers,
      next: { revalidate: ONE_HOUR }
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`GitHub API error (${response.status}): ${message}`);
  }

  const data = await response.json();

  return {
    user,
    repos: data
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        topics: repo.topics,
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at
      }))
  };
});

export async function getGithubRepos() {
  return fetchGithubRepos();
}
