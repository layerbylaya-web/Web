import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://layerbylaya.com';

  const routes = [
    '',
    '/services',
    '/bridal-makeup-dubai',
    '/bridal-makeup-kerala',
    '/party-makeup-and-hair',
    '/fashion-editorial-makeup',
    '/commercial-makeup-artist-dubai',
    '/online-makeup-consultation',
    '/daily-makeup-consultation',
    '/personal-makeup-kit-audit',
    '/learn-your-own-makeup-online',
    '/portfolio',
    '/about-laya',
    '/contact',
    '/faq',
    '/blog'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
