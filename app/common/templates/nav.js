const MENU_ITEMS = [
	{ href: '/order', title: 'Заказать сайт' },
	{ href: '/portfolio', title: 'Портфолио' },
];

function renderNav(className = '', pathname = '/') {
	const menuTemplate = MENU_ITEMS.map(
		({ href, title }) => /* html */ `
			<li class="nav__item">
				<a
					class="nav__button button ${pathname === href ? 'button--current' : ''}"
					href="${href}"
					${pathname === href ? 'aria-current="page"' : ''}
				>
					${title}
				</a>
			</li>
		`,
	).join('');

	return /* html */ `
		<nav class="nav ${className}">
			<ul class="nav__list">
				${menuTemplate}
			</ul>
		</nav>
	`;
}

export { renderNav };
