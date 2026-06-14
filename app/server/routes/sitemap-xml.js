import { getSiteConfig } from '#core/common/lib/site-config.js';
import { createSitemapXmlRoute } from '#core/common/templates/sitemap-xml.js';

const sitemapXmlRoute = createSitemapXmlRoute(() => {
	const { baseUrl, publicPages } = getSiteConfig();

	return [...publicPages].map((page) => ({
		loc: `${baseUrl}${page}`,
		priority: '0.8',
	}));
});

export { sitemapXmlRoute };
