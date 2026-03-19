import { MetadataRoute } from 'next';
import { 
  NAVIGATION_ITEMS, 
  PROGRAM_AREAS, 
  ALL_COUNTIES 
} from './lib/Constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jacechildren.org';
  const currentDate = new Date();
  
  // Generate routes from navigation items
  const navigationRoutes: MetadataRoute.Sitemap = NAVIGATION_ITEMS.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: currentDate,
    changeFrequency: item.href === '/' ? 'daily' : 'weekly',
    priority: item.href === '/' ? 1 : 0.8,
  }));

  // Generate program routes
  const programRoutes: MetadataRoute.Sitemap = PROGRAM_AREAS.map((program) => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Additional static routes
  const additionalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/impact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Generate county routes using ALL_COUNTIES (which has slugs pre-defined)
  const countyRoutes: MetadataRoute.Sitemap = ALL_COUNTIES.map((county) => ({
    url: `${baseUrl}/counties/${county.slug}`, // Use pre-defined slug
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...navigationRoutes,
    ...programRoutes,
    ...additionalRoutes,
    ...countyRoutes,
  ];
}