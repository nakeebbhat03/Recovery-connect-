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
    { key: 'resources', href: 'resources.html', label: 'Resources',
      icon: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>' },
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
