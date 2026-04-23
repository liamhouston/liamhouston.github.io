function getParam(name) {
	const params = new URLSearchParams(window.location.search);
	return params.get(name) || null;
}

function escapeHtml(str) {
	return str.replace(/&/g, '&amp;')
						.replace(/</g, '&lt;')
						.replace(/>/g, '&gt;')
						.replace(/"/g, '&quot;')
						.replace(/'/g, '&#39;');
}

async function loadJson(path) {
	const res = await fetch(path);
	if (!res.ok) throw new Error('Failed fetching ' + path);
	return res.json();
}

async function loadText(path) {
	const res = await fetch(path);
	if (!res.ok) throw new Error('Failed fetching ' + path);
	return res.text();
}


// Fills the HTML elements with appropriate title + content.
function renderPoemText(title, text) {
	document.title = title;
	const titleEl = document.querySelector('.poem-title');
	const contentEl = document.querySelector('.poem-content');
	if (titleEl) titleEl.textContent = title;
	if (contentEl) contentEl.innerHTML = '<pre style="white-space:pre-wrap">' + escapeHtml(text) + '</pre>';
}

(async function main() {
	const id = getParam('p');
	try {
		const data = await loadJson('poems.json');
        // if json is correct find the poem with given name, otherwise return null
		const poem = (data && data.poems) ? data.poems.find(p => p.id === id) : null;
		if (!poem) {
			renderPoemText('Poem not found', 'That poem does not exist.');
			return;
		}
		const text = await loadText(poem.file);
		renderPoemText(poem.title, text);
	} catch (err) {
		const titleEl = document.querySelector('.poem-title');
		const contentEl = document.querySelector('.poem-content');
		if (titleEl) titleEl.textContent = 'Error';
		if (contentEl) contentEl.textContent = err.message;
		console.error(err);
	}
})();

