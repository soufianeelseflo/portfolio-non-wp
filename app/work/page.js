import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkGallery from './WorkGallery';
import { getGithubRepos } from '../../lib/github';

export const metadata = {
  title: 'Work · Sofiane El Habib',
  description:
    'Selected projects from Sofiane El Habib highlighting performant, accessible interfaces built with React, Next.js, and modern tooling.'
};

export default async function WorkPage() {
  let repos = [];
  let error = '';

  try {
    const data = await getGithubRepos();
    repos = data.repos;
  } catch (err) {
    error = 'GitHub projects are unavailable right now. Please try again later.';
  }

  return (
    <>
      <Header />
      <main id="main-content" className="container-prose py-12 lg:py-16">
        <header className="max-w-3xl space-y-3">
          <h1 className="section-title text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h1>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
            Real-world, shipped projects sourced directly from GitHub. Filter by language or search by keywords
            to explore how I design for performance, accessibility, and maintainability.
          </p>
        </header>

        {error ? (
          <div className="mt-10 card p-6 text-sm text-red-600">
            {error}
          </div>
        ) : (
          <WorkGallery initialRepos={repos} />
        )}
      </main>
      <Footer />
    </>
  );
}
