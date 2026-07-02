import { renderCookieConsentSettingsControl } from '#core/common/templates/cookie-consent-settings-control.js';

function renderSiteFooter(pathname = '') {
	if (pathname === '/privacy') {
		const settingsControl = renderCookieConsentSettingsControl({
			className: 'inner-page__footer-link',
			pathname,
		});

		if (!settingsControl) {
			return '';
		}

		return /* html */ `
			<footer class="inner-page__footer">
				${settingsControl}
			</footer>
		`;
	}

	const preamble = pathname === '/order' ? 'Нажимая на кнопку, вы соглашаетесь с ' : '';
	const policyText = pathname === '/order' ? 'Политикой обработки персональных данных' : 'Политика конфиденциальности';

	return /* html */ `
		<footer class="inner-page__footer">
			<p class="inner-page__footer-line">
				${preamble}<a class="inner-page__footer-link" href="/privacy">${policyText}</a>
			</p>
			${renderCookieConsentSettingsControl({ className: 'inner-page__footer-link', pathname })}
		</footer>
	`;
}

export { renderSiteFooter };
