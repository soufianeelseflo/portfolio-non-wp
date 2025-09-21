export default function Footer() {
  return (
    <footer className="border-t border-gray-200/60 dark:border-gray-800/60 mt-16">
      <div className="container-prose py-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Sofiane El Habib. Crafted with accessibility and performance in mind.
        </p>
        <nav aria-label="Legal" className="flex items-center justify-center gap-4 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          <a className="hover:text-gray-900 dark:hover:text-gray-100" href="/terms">Terms</a>
          <a className="hover:text-gray-900 dark:hover:text-gray-100" href="/privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
