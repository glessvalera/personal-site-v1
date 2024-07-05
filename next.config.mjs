/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/personal-site-v1',
    assetPrefix: '/personal-site-v1/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
