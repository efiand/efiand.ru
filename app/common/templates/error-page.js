import { renderPromo } from '#common/templates/promo.js';
import { getSiteConfig } from '#core/common/lib/site-config.js';
import { renderMailtoContactWithPrivacy } from '#core/common/templates/mailto-privacy.js';

/** @type {(statusCode: number, message: string) => string} */
function renderErrorPage(statusCode, message) {
	const { baseHost } = getSiteConfig();

	return renderPromo(
		`Ошибка ${statusCode}. ${message}`,
		renderMailtoContactWithPrivacy({ subject: `Ошибка ${statusCode} на сайте ${baseHost}` }),
	);
}

export { renderErrorPage };
