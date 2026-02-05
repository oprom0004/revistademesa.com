import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Variable DC Power Supply Guide',
        short_name: 'VDC Guide',
        description: 'Precision Source for NEMA Standard Equipment & 96V Battery Architectures',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#f59e0b',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
