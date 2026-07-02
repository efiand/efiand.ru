import { renderNav } from '#common/templates/nav.js';
import { renderSiteFooter } from '#common/templates/site-footer.js';

function renderInnerPage({ heading = '', pathname = '', template = '' } = {}) {
	return /* html */ `
		<main class="inner-page">
			${renderNav('inner-page__nav', pathname)}
			${heading ? /* html */ `<h1 class="_visually-hidden">${heading}</h1>` : ''}
			${template}

			${renderSiteFooter(pathname)}
		</main>
	`;
}

export { renderInnerPage };
