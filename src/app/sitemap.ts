import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/bridal-makeup-dubai', priority: 0.9 },
    { path: '/bridal-makeup-kerala', priority: 0.9 },
    { path: '/party-makeup-and-hair', priority: 0.8 },
    { path: '/fashion-editorial-makeup', priority: 0.8 },
    { path: '/commercial-makeup-artist-dubai', priority: 0.8 },
    { path: '/online-makeup-consultation', priority: 0.9 },
    { path: '/daily-makeup-consultation', priority: 0.7 },
    { path: '/personal-makeup-kit-audit', priority: 0.7 },
    { path: '/learn-your-own-makeup-online', priority: 0.7 },
    { path: '/portfolio', priority: 0.8 },
    { path: '/about-laya', priority: 0.7 },
    { path: '/contact', priority: 0.9 },
    { path: '/faq', priority: 0.6 },
    { path: '/blog', priority: 0.5 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }));
}
