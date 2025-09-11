document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#hamburger');
  const nav = document.querySelector('nav ul');
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(console.error);
  }
});