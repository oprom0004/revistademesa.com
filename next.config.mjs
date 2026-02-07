import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Setup dev platform for local development
if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
