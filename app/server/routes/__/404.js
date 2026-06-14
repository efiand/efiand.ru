import { renderErrorPage } from '#common/templates/error-page.js';

const notFoundRoute = {
	/** @type {RouteMethod} */
	async GET() {
		return {
			page: {
				description: 'Страница ошибок.',
				heading: 'Ошибка 404',
				pageTemplate: renderErrorPage(404, 'Страница не найдена.'),
			},
		};
	},
};

export { notFoundRoute };
