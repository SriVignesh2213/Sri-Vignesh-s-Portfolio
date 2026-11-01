import path from 'node:path';
import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
	output: 'export',
	basePath,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	transpilePackages: ['next-mdx-remote'],
	reactCompiler: true,
	turbopack: {
		root: path.join(__dirname, '..'),
	},
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
};

export default nextConfig;
