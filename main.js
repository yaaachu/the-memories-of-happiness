// =====================
// 主頁卡片產生
// =====================

const app = document.getElementById('app');

if (!posts || posts.length === 0) {
  app.textContent = "目前沒有任何後記。";
} else {
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${post.title}</h3>
      ${post.date ? `<div class="meta">${post.date}</div>` : ''}
      ${post.venue ? `<div class="meta">${post.venue}</div>` : ''}
      ${post.artist ? `<div class="meta">${post.artist}</div>` : ''}
    `;

    card.addEventListener('click', () => {
      window.location.href = `post.html?id=${post.id}`;
    });

    app.appendChild(card);
  });
}
