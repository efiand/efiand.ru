import { initSiteClient } from '#core/client/lib/init-site-client.js';
import { setSiteConfig } from '#core/common/lib/site-config.js';

setSiteConfig({
	baseHost: 'efiand.ru',
	cookieConsent: {
		// promo: nav move-back 4s + 1.2s; reduced motion — только uncrop-defer 2s
		showDelayMsByPathname: {
			'/': 5200,
		},
		showDelayMsReducedMotionByPathname: {
			'/': 2000,
		},
	},
	email: 'efiand@ya.ru',
	privacyRevisionDate: '2026-06-25',
	projectDescription: 'Сайт веб-разработчика: услуги по созданию сайтов недорого.',
	projectTitle: 'efiand',
	version: {
		CSS: 6,
		JS: 2,
	},
	yandexMetrikaId: 102299682,
});

initSiteClient();
