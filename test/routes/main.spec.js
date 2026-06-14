import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { createRouteParams } from '#core/test-helpers/route-params.js';
import { mainRoute } from '#server/routes/main.js';

describe('Маршруты/Главная', () => {
	test('Возвращает промо-шаблон с приветственным заголовком', async () => {
		const { page } = await mainRoute.GET(createRouteParams());

		assert.strictEqual(page?.heading, 'Добро пожаловать!');
		assert.match(page?.pageTemplate ?? '', /class="promo"/);
		assert.match(page?.pageTemplate ?? '', /Меня зовут Андрей/);
	});
});
