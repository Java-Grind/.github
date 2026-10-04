const constellation = document.querySelector('#constellation');
const mapToggle = document.querySelector('.map-toggle');

mapToggle.addEventListener('click', () => {
  const routed = constellation.classList.toggle('is-routed');
  mapToggle.setAttribute('aria-pressed', String(routed));
  mapToggle.innerHTML = routed
    ? 'Скрыть маршрут <span>←</span>'
    : 'Показать маршрут <span>→</span>';
});
