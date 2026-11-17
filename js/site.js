'use strict';

// All publications are present in the HTML; filtering is an optional enhancement.
const controls = document.querySelector('.publication-controls');
const search = document.querySelector('#publication-search');
const year = document.querySelector('#publication-year');
const status = document.querySelector('#publication-status');
const noResults = document.querySelector('#no-results');
const groups = [...document.querySelectorAll('.publication-year')];
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const papers = [...document.querySelectorAll('.publication')].map(element => ({
  element,
  text: normalize(element.textContent),
  year: element.dataset.year
}));

function filterPublications() {
  const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
  let count = 0;
  for (const paper of papers) {
    const matches = (year.value === 'all' || paper.year === year.value) && terms.every(term => paper.text.includes(term));
    paper.element.hidden = !matches;
    if (matches) count++;
  }
  for (const group of groups) {
    group.hidden = !group.querySelector('.publication:not([hidden])');
  }
  status.textContent = `${count} of ${papers.length} publications`;
  noResults.hidden = count !== 0;
}

if (controls && search && year && status && noResults) {
  controls.hidden = false;
  status.hidden = false;
  search.addEventListener('input', filterPublications);
  year.addEventListener('change', filterPublications);
  controls.addEventListener('submit', event => event.preventDefault());
  controls.addEventListener('reset', () => {
    // Reset values explicitly so filtering does not race the browser's form reset.
    search.value = '';
    year.value = 'all';
    filterPublications();
  });
  filterPublications();
}

document.querySelector('#copyright-year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -55% 0px' });
  for (const link of navLinks) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}
