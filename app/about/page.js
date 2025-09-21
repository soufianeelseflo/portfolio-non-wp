import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutStory from './AboutStory';

const principles = [
  'Simplicity before cleverness.',
  'Small, composable components.',
  'Readable first, aesthetic second.',
  'Performance and accessibility by default.',
  'Ship, measure, iterate.'
];

const toolset = [
  'HTML',
  'CSS',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Design Systems',
  'Accessibility Auditing',
  'Core Web Vitals',
  'REST APIs',
  'CI/CD',
  'Storybook'
];

export const metadata = {
  title: 'About · Sofiane El Habib',
  description:
    'Meet Sofiane El Habib: a front-end developer obsessed with resilient UI, inclusive experiences, and performance-first product teams.'
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="container-prose space-y-12 py-12 lg:py-16">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">About</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Designer-friendly front-end engineer.</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
            I translate visual thinking into performant, accessible code. From concept to production, I help teams ship deliberate UI that stays fast as it grows.
          </p>
        </header>

        <AboutStory principles={principles} />

        <section aria-label="Expertise" className="grid gap-4 md:grid-cols-3">
          <article className="card p-6">
            <h2 className="text-lg font-semibold tracking-tight">Impact</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              I specialize in turning requirements into reusable components, integrating APIs, and building accessible design systems aligned with product metrics.
            </p>
          </article>
          <article className="card p-6">
            <h2 className="text-lg font-semibold tracking-tight">Mindset</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              I collaborate with designers, product folks, and engineers. Pairing, planning, and writing docs keep everyone aligned and shipping smoothly.
            </p>
          </article>
          <article className="card p-6">
            <h2 className="text-lg font-semibold tracking-tight">Toolset</h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
              {toolset.map((item) => (
                <li key={item} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600 dark:bg-gray-800/70 dark:text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
