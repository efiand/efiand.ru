import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { registerMarkupValidationTests, useIntegrationFixture } from '#core/test-helpers/integration-fixture.js';
import { createApp } from '#server/lib/app.js';

const fixture = useIntegrationFixture({ createApp });

describe('Интеграция', () => {
	registerMarkupValidationTests(fixture);

	describe('Страницы', () => {
		test('Главная содержит промо-секцию', async () => {
			const markup = await fixture.getMarkup('/');

			assert.match(markup, /class="promo__image"/);
		});

		test('Страница заказа содержит тарифы', async () => {
			const markup = await fixture.getMarkup('/order');

			assert.match(markup, /class="tariffs"/);
			assert.match(markup, /Заказать сайт/);
			assert.match(markup, /Миссия/);
		});

		test('Неизвестный маршрут возвращает страницу 404', async () => {
			const markup = await fixture.getMarkup('/unknown-page');

			assert.match(markup, /Ошибка 404/);
			assert.match(markup, /Страница не найдена/);
		});
	});
});
