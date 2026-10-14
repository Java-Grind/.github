const constellation = document.querySelector('#constellation');
const mapToggle = document.querySelector('.map-toggle');
const themeButtons = document.querySelectorAll('[data-theme]');
const favicon = document.querySelector('#favicon');
const brandMark = document.querySelector('[data-brand-mark]');

if (mapToggle && constellation) {
  mapToggle.addEventListener('click', () => {
    const routed = constellation.classList.toggle('is-routed');
    mapToggle.setAttribute('aria-pressed', String(routed));
    mapToggle.innerHTML = routed
      ? 'Скрыть маршрут <span>←</span>'
      : 'Показать маршрут <span>→</span>';
  });
}

function setTheme(theme) {
  const halloweenMode = theme === 'halloween';
  document.body.classList.toggle('halloween-theme', halloweenMode);
  document.body.classList.toggle('sky-theme', !halloweenMode);
  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === theme;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  favicon.href = halloweenMode ? 'favicon-halloween.png' : 'favicon.png';
  if (brandMark) brandMark.src = halloweenMode ? 'assets/java-grind-mark-halloween.png' : 'assets/java-grind-mark-blueprint.png';
  localStorage.setItem('java-grind-theme', theme);
}

const savedTheme = localStorage.getItem('java-grind-theme');
setTheme(savedTheme === 'halloween' || savedTheme === 'cloud' ? 'halloween' : 'sky');
themeButtons.forEach((button) => button.addEventListener('click', () => setTheme(button.dataset.theme)));
