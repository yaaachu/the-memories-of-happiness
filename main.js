const app = document.getElementById('app');
const yearMenu = document.getElementById('year-menu');

// 如果 posts 空，直接顯示訊息
if (!posts || posts.length === 0) {
  app.textContent = "目前沒有任何後記。";
} else {
  // 取得所有年份，排序新到舊
  const years = [...new Set(posts.map(post => post.date.split('/')[0].trim()))].sort((a,b) => b - a);

  // ===== 左側年份目錄 =====
  // 新增「全部年份」按鈕
  const allBtn = document.createElement('button');
  allBtn.textContent = '全部';
  allBtn.classList.add('active'); // 預設 active
  allBtn.addEventListener('click', () => {
    setActiveButton(allBtn);
    renderCards(); // 不帶參數 → 全部
  });
  yearMenu.appendChild(allBtn);

  // 為每個年份生成按鈕
  years.forEach(year => {
    const btn = document.createElement('button');
    btn.textContent = year;
    btn.addEventListener('click', () => {
      setActiveButton(btn);
      renderCards(year);
    });
    yearMenu.appendChild(btn);
  });

  // ===== 渲染卡片函數 =====
  function renderCards(filterYear) {
    app.innerHTML = ''; // 清空

    // 篩選對應年份
    const filtered = filterYear 
      ? posts.filter(post => post.date.startsWith(filterYear))
      : posts;

    if (filtered.length === 0) {
      app.textContent = "目前沒有這個年份的後記。";
      return;
    }

    filtered.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${post.title}</h3>
        ${post.date ? `<div class="meta">${post.date}</div>` : ''}
        ${post.venue ? `<div class="meta">${post.venue}</div>` : ''}
      `;
      card.addEventListener('click', () => {
        window.location.href = `post.html?id=${post.id}`;
      });
      app.appendChild(card);
    });
  }

  // ===== 設定哪個按鈕是 active 狀態 =====
  function setActiveButton(button) {
    document.querySelectorAll('#year-menu button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  }

  // 預設渲染全部卡片
  renderCards();
}
