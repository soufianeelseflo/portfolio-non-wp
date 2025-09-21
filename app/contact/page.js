import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactActions from './ContactActions';

export const metadata = {
  title: 'Contact · Sofiane El Habib',
  description: 'Ready to collaborate? Reach out to Sofiane El Habib for front-end partnerships, product audits, and rapid prototyping.'
};

const responseTimes = [
  'Time zones: CET ±2h',
  'Replies within 24 hours',
  'Available for remote collaborations'
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="container-prose space-y-12 py-12 lg:py-16">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Contact</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s build something people trust.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
            Send a note about your project, product, or team. I’ll review goals, timelines, and constraints before we jump on a call.
          </p>
          <ContactActions />
        </header>

        <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <ContactForm />
          <aside className="card h-full p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100">Response policy</h2>
            <ul className="space-y-2">
              {responseTimes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Need something specific? Share timelines, audiences, or references. I’ll reply with next steps and a tailored plan.
            </p>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
