const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.repo-card');
const search = document.querySelector('#search');
const nodes = document.querySelectorAll('.topic-node');

function applyFilter(topic = document.querySelector('.filter.active').dataset.topic) {
  const term = search.value.toLowerCase().trim();
  cards.forEach(card => {
    const matchesTopic = topic === 'All' || card.dataset.tags.toLowerCase().includes(topic.toLowerCase());
    card.classList.toggle('hidden', !(matchesTopic && card.dataset.tags.toLowerCase().includes(term)));
  });
}

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  applyFilter(button.dataset.topic);
}));

search.addEventListener('input', () => applyFilter());
nodes.forEach(node => node.addEventListener('click', () => {
  nodes.forEach(item => item.classList.remove('focused'));
  node.classList.add('focused');
  const matchingFilter = [...filters].find(filter => node.dataset.node.includes(filter.dataset.topic) || filter.dataset.topic.includes(node.dataset.node));
  if (matchingFilter) matchingFilter.click();
  else { search.value = node.dataset.node; applyFilter('All'); }
  document.querySelector('#library').scrollIntoView({ behavior: 'smooth', block: 'start' });
}));

document.querySelectorAll('.save').forEach(button => button.addEventListener('click', () => {
  button.textContent = button.textContent === '☆' ? '★' : '☆';
  button.style.color = button.textContent === '★' ? '#f2af30' : '';
}));
