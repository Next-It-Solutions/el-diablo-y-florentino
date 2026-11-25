const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) toggle.setAttribute('aria-expanded', 'false');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') toggle.setAttribute('aria-expanded', 'false');
});
const lightbox = document.querySelector('#lightbox');
let lastTrigger;
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    lastTrigger = button;
    const image = lightbox.querySelector('img');
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    lightbox.showModal();
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener('close', () => lastTrigger?.focus());
