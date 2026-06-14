import { renderNav } from '#common/templates/nav.js';

function renderInnerPage({ heading = '', pathname = '', template = '' } = {}) {
	return /* html */ `
		<main class="inner-page">
			${renderNav('inner-page__nav', pathname)}
			${heading ? /* html */ `<h1 class="_visually-hidden">${heading}</h1>` : ''}
			${template}

			${renderPrivacyLinkTemplate(pathname)}
		</main>
	`;
}

function renderPrivacyLinkTemplate(pathname = '') {
	if (pathname === '/privacy') {
		return '';
	}

	const preamble = pathname === '/order' ? 'Нажимая на кнопку, вы соглашаетесь с ' : '';
	const policyText = pathname === '/order' ? 'Политикой обработки персональных данных' : 'Политика конфиденциальности';

	return /* html */ `
		<footer class="inner-page__footer">
			${preamble}
			<a class="inner-page__footer-link" href="/privacy">${policyText}</a>
		</footer>
	`;
}

export { renderInnerPage };
