async function fillPoemTitlesFromJson(jsonPath = 'poems.json') {
  const res = await fetch(jsonPath);
  if (!res.ok) throw new Error(`Failed to load ${jsonPath}`);

  const data = await res.json();
  const poems = Array.isArray(data.poems) ? data.poems : [];
  const titlesById = new Map(poems.map((p) => [p.id, p.title]));

  document.querySelectorAll('[data-poem-id]').forEach((el) => {
    const id = el.dataset.poemId;
    const title = titlesById.get(id);
    if (title) el.textContent = title;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fillPoemTitlesFromJson().catch((err) => {
    console.error('Error loading poem titles:', err);
  });
});