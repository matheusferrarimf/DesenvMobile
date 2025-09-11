document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('#hamburger');
  const nav = document.querySelector('nav .links');
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(console.error);
  }
});