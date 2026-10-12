const constellation = document.querySelector('#constellation');
const mapToggle = document.querySelector('.map-toggle');
const themeButtons = document.querySelectorAll('[data-theme]');
const favicon = document.querySelector('#favicon');

mapToggle.addEventListener('click', () => {
  const routed = constellation.classList.toggle('is-routed');
  mapToggle.setAttribute('aria-pressed', String(routed));
  mapToggle.innerHTML = routed
    ? 'Скрыть маршрут <span>←</span>'
    : 'Показать маршрут <span>→</span>';
});

function setTheme(theme) {
  const isAutumn = theme === 'autumn';
  document.body.classList.toggle('autumn-theme', isAutumn);
  themeButtons.forEach(button => {
    const isActive = button.dataset.theme === theme;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  favicon.href = isAutumn ? 'favicon-halloween.png' : 'favicon.png';
  localStorage.setItem('java-grind-theme', theme);
}

const savedTheme = localStorage.getItem('java-grind-theme');
setTheme(savedTheme === 'classic' ? 'classic' : 'autumn');
themeButtons.forEach(button => button.addEventListener('click', () => setTheme(button.dataset.theme)));
