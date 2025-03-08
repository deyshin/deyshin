import getConfig from 'next/config';

// Safely get config with fallback
const config = getConfig() || { publicRuntimeConfig: {} };
const { publicRuntimeConfig = {} } = config;
const basePath = publicRuntimeConfig.basePath || '';

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function myImageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // Check if src is an absolute path that needs the basePath prefixed
  if (basePath && src.startsWith('/')) {
    // Remove any potential double slashes
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    return `${basePath}${normalizedSrc}?width=${width}&quality=${quality}`;
  }

  // For external URLs or relative paths, return as is with query params
  return `${src}?width=${width}&quality=${quality}`;
}