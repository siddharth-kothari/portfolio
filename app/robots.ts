import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {

    const baseUrl = process.env.NEXT_URL || 'https://siddharthkothari.com/';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}sitemap.xml`,
  }
}