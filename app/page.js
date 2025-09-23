import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

const focusAreas = [
  {
    title: 'Performance first',
    copy:
      'Measure with Core Web Vitals, ship static-friendly pages, lazy-load only what is needed, and keep bundle sizes lean.'
  },
  {
    title: 'Accessible by default',
    copy:
      'Semantic HTML, keyboard flows, and color-contrast checks. Every interaction is tested with assistive tech in mind.'
  },
  {
    title: 'Production-ready UI',
    copy:
      'Design systems, responsive spacing scales, and real content. I iterate quickly while keeping code maintainable.'
  }
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="container-prose space-y-16 py-20 sm:py-24">
        <section className="flex flex-col items-center gap-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Front-end developer · Remote · 2025
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Front-end development focused on clarity, performance, and calm experiences.
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            I’m <span className="bg-gradient-to-r from-brand-400 to-brand-700 bg-clip-text text-transparent font-semibold">Sofiane&nbsp;El&nbsp;Habib</span>, a front-end engineer building fast, accessible interfaces with React and Next.js.
            I care about maintainable systems, inclusive UX, and the feeling of flow for every visitor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link className="btn" href="/work">
              See projects
            </Link>
            <Link className="badge" href="/about">
              Learn about me
            </Link>
            <Link className="badge" href="/contact">
              Start a project
            </Link>
          </div>
        </section>

        <section aria-label="Focus areas" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.title} className="card h-full p-6 text-left">
              <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {area.copy}
              </p>
            </article>
          ))}
        </section>

        <section className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-left">
            <h2 className="text-lg font-semibold tracking-tight">Currently open to new collaborations</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I help teams ship polished marketing sites, dashboards, and design systems. Let’s build something trusted and fast.
            </p>
          </div>
          <Link className="btn self-start sm:self-auto" href="/contact">
            Book a discovery call
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
