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
  const cloudMode = theme === 'cloud';
  document.body.classList.toggle('cloud-theme', cloudMode);
  document.body.classList.toggle('sky-theme', !cloudMode);
  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === theme;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  favicon.href = cloudMode ? 'favicon-halloween.png' : 'favicon.png';
  localStorage.setItem('java-grind-theme', theme);
}

const savedTheme = localStorage.getItem('java-grind-theme');
setTheme(savedTheme === 'cloud' ? 'cloud' : 'sky');
themeButtons.forEach((button) => button.addEventListener('click', () => setTheme(button.dataset.theme)));
