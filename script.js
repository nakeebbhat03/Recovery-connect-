function greetingText() {
  const alias = localStorage.getItem('rc_alias') || 'Guest';
  const name = alias === 'Guest' ? 'there' : alias;
  return `Hello, ${name}.<br>How are you holding up today?`;
}

function renderNav(active) {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const items = [
    { key: 'home', href: 'home.html', label: 'Home',
      icon: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>' },
    { key: 'meditate', href: 'meditate.html', label: 'Meditate',
      icon: '<circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" opacity="0.5"/>' },
    { key: 'resources', href: 'resources.html', label: 'Resources',
      icon: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>' },
    { key: 'family', href: 'family.html', label: 'Family',
      icon: '<path d="M12 21C7 16.5 3 13 3 8.8 3 6.1 5.1 4 7.8 4c1.6 0 3 .8 4.2 2.2C13.2 4.8 14.6 4 16.2 4 18.9 4 21 6.1 21 8.8c0 4.2-4 7.7-9 12.2Z"/>' },
    { key: 'circle', href: 'circle.html', label: 'Circle',
      icon: '<circle cx="9" cy="8" r="3"/><path d="M2 21v-1a6 6 0 0 1 12 0v1"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 21v-1a4.5 4.5 0 0 1 7 0v1"/>' },
  ];

  nav.innerHTML = items.map(it => `
    <a href="${it.href}" class="nav-item ${it.key === active ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${it.icon}</svg>
      <span>${it.label}</span>
    </a>
  `).join('');
}

/* ---------- Category (Addiction / Anxiety / Depression) ---------- */
const CATEGORY_META = {
  addiction: { label: 'Addiction', checkinWord: 'craving', greeting: 'growing stronger' },
  anxiety:   { label: 'Anxiety',   checkinWord: 'anxiety',  greeting: 'finding calm' },
  depression:{ label: 'Depression',checkinWord: 'mood',     greeting: 'one day at a time' },
};

function getCategory() {
  return localStorage.getItem('rc_category') || 'addiction';
}

function setCategory(cat) {
  localStorage.setItem('rc_category', cat);
}

/* ---------- Dark mode ---------- */
function applyTheme() {
  const dark = localStorage.getItem('rc_theme') === 'dark';
  document.body.classList.toggle('dark', dark);
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = dark ? '☀' : '☾';
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('rc_theme', isDark ? 'dark' : 'light');
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = isDark ? '☀' : '☾';
}

/* ---------- Logout ---------- */
function logout() {
  if (confirm('Log out of Recovery Connect?')) {
    localStorage.removeItem('rc_alias');
    window.location.href = 'index.html';
  }
}

/* ---------- Utility bar (renders logout + dark mode toggle) ---------- */
function renderUtilBar(onLight) {
  const bar = document.getElementById('utilBar');
  if (!bar) return;
  const dark = document.body.classList.contains('dark');
  bar.className = 'util-bar' + (onLight ? ' on-light' : '');
  bar.innerHTML = `
    <button class="util-btn" id="themeBtn" onclick="toggleTheme()">${dark ? '☀' : '☾'}</button>
    <button class="util-btn" onclick="logout()">⏻</button>
  `;
}

applyTheme();
