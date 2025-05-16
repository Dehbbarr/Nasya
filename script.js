
fetch('data/mangas.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('manga-list');
    data.forEach(manga => {
      const card = document.createElement('div');
      card.className = 'manga-card';
      card.innerHTML = `
        <img src="${manga.pages[0]}" alt="${manga.title}" />
        <h3>${manga.title}</h3>
        <p>${manga.description}</p>
        <p>⭐ ${manga.rating} (${manga.votes})</p>
        <a href="reader.html?id=${manga.id}" class="read-btn">Читать</a>
      `;
      list.appendChild(card);
    });
  });
