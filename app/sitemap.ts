import { MetadataRoute } from 'next';
import { VOLTAGE_PAGES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://revistademesa.com';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/variable-power-supplies`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    // Dynamic voltage pages
    const voltagePages = VOLTAGE_PAGES.map((page) => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...voltagePages];
}
