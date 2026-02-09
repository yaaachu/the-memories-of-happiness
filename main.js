const app = document.getElementById('app');
const yearMenu = document.getElementById('year-menu');

const tagMenu = document.getElementById('tag-filter');
let activeTags = new Set();

// 如果 posts 空，直接顯示訊息
if (!posts || posts.length === 0) {
  app.textContent = "目前沒有任何後記。";
} else {
  let currentYear = null;
  // 取得所有年份，排序新到舊
  const years = [...new Set(posts.map(post => post.date.split('/')[0].trim()))].sort((a,b) => b - a);
  const allTags = [...new Set(posts.flatMap(post => post.tags || []))];

  // ===== 左側年份目錄 =====
  // 新增「全部年份」按鈕
  const allBtn = document.createElement('button');
  allBtn.textContent = '全部';
  allBtn.classList.add('active'); // 預設 active
  allBtn.addEventListener('click', () => {
    setActiveButton(allBtn);
    currentYear = null;
    renderCards(); // 不帶參數 → 全部
  });
  yearMenu.appendChild(allBtn);

  // 為每個年份生成按鈕
  years.forEach(year => {
    const btn = document.createElement('button');
    btn.textContent = year;
    btn.addEventListener('click', () => {
      setActiveButton(btn);
      currentYear = year;
      renderCards(currentYear);
    });
    yearMenu.appendChild(btn);
  });

  // 為每個標籤生成按鈕
  allTags.forEach(tag => {
  const btn = document.createElement('button');
  btn.className = 'tag-btn';
  btn.textContent = `#${tag}`;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    if (activeTags.has(tag)) {
      activeTags.delete(tag);
    } else {
      activeTags.add(tag);
    }

    renderCards(currentYear);
  });

  tagMenu.appendChild(btn);
});


  // ===== 渲染卡片函數 =====
  function renderCards(filterYear) {
    app.innerHTML = ''; // 清空

    // 篩選對應年份
    const filtered = posts.filter(post => {
      const matchYear = filterYear
        ? post.date.startsWith(filterYear)
        : true;

      const matchTags =
        activeTags.size === 0
          ? true
          : post.tags?.some(tag => activeTags.has(tag));

      return matchYear && matchTags;
    });

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
        ${post.tags ? `<div class="tag-row">${post.tags.map(t => `<span>#${t}</span>`).join(' ')}</div>` : ''}
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
