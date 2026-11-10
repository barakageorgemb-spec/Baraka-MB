const toggle = document.getElementById('language-toggle');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
let language = 'sw';
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-en][data-sw]').forEach(el => {
    el.textContent = el.dataset[next];
  });
  toggle.textContent = next === 'sw' ? 'EN' : 'SW';
  toggle.setAttribute('aria-label', next === 'sw' ? 'Switch to English' : 'Badili kwenda Kiswahili');
}
toggle.addEventListener('click', () => setLanguage(language === 'sw' ? 'en' : 'sw'));
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
