/** @type {(data: LayoutData) => string} */
function renderLayout({ pageTemplate }) {
	return /* html */ `<div class="layout">${pageTemplate}</div>`;
}

export { renderLayout };
