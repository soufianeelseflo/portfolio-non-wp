import { SITE_URL } from '../lib/constants';

const routes = [
  { path: '/', priority: 1 },
  { path: '/work', priority: 0.9 },
  { path: '/about', priority: 0.9 },
  { path: '/contact', priority: 0.9 },
  { path: '/terms', priority: 0.4 },
  { path: '/privacy', priority: 0.4 }
];

/**
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority
  }));
}
