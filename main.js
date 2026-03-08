const app = document.getElementById('app');
const yearMenu = document.getElementById('year-menu');
const tagMenu = document.getElementById('tag-filter');
let activeTags = new Set();

if (!posts || posts.length === 0) {
  app.textContent = "目前沒有任何後記。";
} else {
  let currentYear = null;
  
  // 取得所有年份，增加 post.date 的存在檢查
  const years = [...new Set(posts.map(post => post.date ? post.date.split('/')[0].trim() : '未知'))]
    .filter(y => y !== '未知')
    .sort((a, b) => b - a);
    
  const allTags = [...new Set(posts.flatMap(post => post.tags || []))];

  // ===== 標籤排序邏輯 =====

  // 1️⃣ 定義類型順序（固定）
  const typeOrder = ["라이브뷰잉", "콘서트", "영화", "뮤직컬"];

  // 2️⃣ 分類型與藝人
  const typeTags = allTags.filter(tag => typeOrder.includes(tag));
  const artistTags = allTags.filter(tag => !typeOrder.includes(tag));

  // 3️⃣ 排序
  typeTags.sort((a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b));
  artistTags.sort((a, b) => a.localeCompare(b, 'ko'));

  // 4️⃣ 合併
  const sortedTags = [...typeTags, ...artistTags];

  // ===== 左側年份目錄 =====
  const allBtn = document.createElement('button');
  allBtn.textContent = '全部';
  allBtn.classList.add('active');
  allBtn.addEventListener('click', () => {
    setActiveButton(allBtn);
    currentYear = null;
    renderCards();
  });
  yearMenu.appendChild(allBtn);

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

  // ===== 標籤篩選 =====
  sortedTags.forEach(tag => {
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
    app.innerHTML = '';

    const filtered = posts.filter(post => {
      // 增加安全檢查，確保 post.date 存在才執行 startsWith
      const matchYear = filterYear
        ? (post.date && post.date.startsWith(filterYear))
        : true;

      const matchTags =
        activeTags.size === 0
          ? true
          : [...activeTags].every(tag => post.tags?.includes(tag));

      return matchYear && matchTags;
    });

    if (filtered.length === 0) {
      app.textContent = "目前沒有符合條件的後記。";
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
        window.location.href = `post.html?id=${encodeURIComponent(post.id)}`;
      });
      app.appendChild(card);
    });
  }

  function setActiveButton(button) {
    document.querySelectorAll('#year-menu button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  }

  renderCards();
}
