import '#common/configure-site.js';
import { registerPrivacyRouteTests } from '#core/test-helpers/privacy-route-tests.js';
import { privacyRoute } from '#server/routes/privacy.js';

registerPrivacyRouteTests(privacyRoute, {
	email: 'efiand@ya.ru',
	hasEmail: true,
	patterns: [/разработку сайта/, /сообщени(?:е|я) об ошибке/],
});
