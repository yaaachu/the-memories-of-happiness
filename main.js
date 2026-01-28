// =====================
// 主頁卡片產生
// =====================

const app = document.getElementById('app');

posts.forEach(post => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${post.title}</h3>
    <div class="meta">${post.date}</div>
    <div class="meta">${post.venue}</div>
  `;

  card.addEventListener('click', () => {
  window.location.href = `post.html?id=${post.id}`;
});

  app.appendChild(card);
});
