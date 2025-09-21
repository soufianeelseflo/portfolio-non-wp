'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../../lib/constants';

const THEME_KEY = 'theme';

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
    setIsDark(next);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored) return;
      document.documentElement.classList.toggle('dark', event.matches);
      document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
      setIsDark(event.matches);
    };
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange);
    } else {
      media.addListener(handleChange);
    }
    const handleStorage = (event) => {
      if (event.key !== THEME_KEY) return;
      const nextIsDark = event.newValue === 'dark';
      document.documentElement.classList.toggle('dark', nextIsDark);
      document.documentElement.dataset.theme = nextIsDark ? 'dark' : 'light';
      setIsDark(nextIsDark);
    };
    window.addEventListener('storage', handleStorage);
    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', handleChange);
      } else {
        media.removeListener(handleChange);
      }
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isNavOpen) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => document.body.style.removeProperty('overflow');
  }, [isNavOpen]);

  const navLinkClasses = 'badge w-full justify-center md:w-auto transition-colors';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-gray-800/60 backdrop-blur bg-white/70 dark:bg-gray-900/70">
      <div className="container-prose flex flex-wrap items-center justify-between gap-3 py-3 md:h-16 md:flex-nowrap">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image src="/logo.svg" alt="Soufiane logo" width={24} height={24} />
          <span>Soufiane</span>
        </Link>
        <div className="flex items-center gap-2 md:hidden">
          <button aria-label="Toggle theme" className="badge" onClick={toggleTheme}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isNavOpen}
            className="badge"
            onClick={() => setIsNavOpen((open) => !open)}
          >
            {isNavOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        <nav
          aria-label="Primary navigation"
          className={`w-full flex-col gap-2 mt-2 md:mt-0 md:w-auto md:flex-row md:items-center md:gap-3 ${isNavOpen ? 'flex' : 'hidden md:flex'}`}
        >
          <ul className="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-3">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                  aria-current={isActive ? 'page' : undefined}
                  className={`${navLinkClasses} ${isActive ? 'border-brand-600 bg-brand-600 text-white shadow-soft hover:bg-brand-600 dark:border-brand-500' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
              );
            })}
            <li className="hidden md:inline-flex">
              <button
                aria-label="Toggle theme"
                className="badge"
                onClick={toggleTheme}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </li>
            <li>
              <a
                className={`${navLinkClasses} hover:bg-gray-100 dark:hover:bg-gray-800`}
                href="mailto:guava.pumice6528@eagereverest.com"
                title="Email"
                onClick={() => setIsNavOpen(false)}
              >
                <Mail size={16} />
                <span className="sr-only">Email Sofiane</span>
              </a>
            </li>
            <li>
              <a
                className={`${navLinkClasses} hover:bg-gray-100 dark:hover:bg-gray-800`}
                href="https://github.com/soufianeelseflo"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setIsNavOpen(false)}
              >
                <Github size={16} />
                <span className="sr-only">Sofiane on GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
