import '#common/configure-site.js';
import { renderErrorPage } from '#common/templates/error-page.js';
import { renderLayout } from '#common/templates/layout.js';
import { setSiteConfig } from '#core/common/lib/site-config.js';
import { createRenderPage } from '#core/common/templates/page.js';
import { createHttpServer } from '#core/server/lib/http-server.js';
import { routes } from '#server/routes/index.js';

setSiteConfig({ routes });

const renderPage = createRenderPage({
	renderLayout,
});

/** @type {(options?: CreateAppOptions) => import('node:http').Server} */
function createApp({ isQuiet = false, middleware, port } = {}) {
	return createHttpServer({
		isQuiet,
		middleware,
		port,
		renderErrorPage,
		renderPage,
	});
}

export { createApp, renderPage };
