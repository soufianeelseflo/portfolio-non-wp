import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { SITE_URL } from '../lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sofiane El Habib · Front-End Developer',
    template: '%s · Sofiane El Habib'
  },
  description:
    'Portfolio of Sofiane El Habib, a front-end developer shipping clean, fast, accessible React and Next.js products.',
  keywords: [
    'Sofiane El Habib',
    'Soufiane',
    'Front-end developer',
    'React developer',
    'Next.js portfolio',
    'Accessible web apps'
  ],
  category: 'Portfolio',
  authors: [{ name: 'Sofiane El Habib', url: SITE_URL }],
  creator: 'Sofiane El Habib',
  publisher: 'Sofiane El Habib',
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  },
  openGraph: {
    title: 'Sofiane El Habib · Front-End Developer',
    description:
      'Clean, fast, accessible web interfaces with React, Tailwind, and Next.js by Sofiane El Habib.',
    url: SITE_URL,
    siteName: 'Sofiane Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Sofiane El Habib — Front-End Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofiane El Habib · Front-End Developer',
    description:
      'Front-end developer focused on modern, accessible interfaces built with React and Next.js.',
    creator: '@soufiane',
    images: [`${SITE_URL}/og-image.png`]
  },
  robots: {
    index: true,
    follow: true
  },
  manifest: '/site.webmanifest'
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  width: 'device-width',
  initialScale: 1
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sofiane El Habib',
  jobTitle: 'Front-End Developer',
  url: SITE_URL,
  alternateName: 'Soufiane',
  sameAs: ['https://github.com/soufianeelseflo'],
  knowsAbout: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Accessibility', 'Performance']
};

const themeScript = `(() => {
  const root = document.documentElement;
  const storageKey = 'theme';
  try {
    const stored = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    root.classList.toggle('dark', isDark);
    root.dataset.theme = isDark ? 'dark' : 'light';
  } catch (error) {
    root.classList.toggle('dark', false);
    root.dataset.theme = 'light';
  }
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 antialiased`}>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <Script
          id="jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </body>
    </html>
  );
}
