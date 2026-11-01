import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export const baseUrl = process.env.SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ['', 'projects', 'internships', 'skills', 'resume'].map(
		(route) => ({
			url: route === '' ? `${baseUrl}/` : `${baseUrl}/${route}`,
			lastModified: new Date(),
		}),
	);

	return routes;
}
