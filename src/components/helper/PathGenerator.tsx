import nextConfig from '../../../next.config.mjs';

/**
 * Create static img path that respects assetPrefix
 * @param path Path to transform
 * @returns Path with prefixed value
 */
export default function getImagePath(path: string): string {
    return `${nextConfig.assetPrefix}/${path}`;
}