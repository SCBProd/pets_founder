const burgerBtn = document.querySelector('.header-burger-btn');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

if (burgerBtn && mobileMenuBackdrop && mobileMenuCloseBtn) {
  const openMenu = () => {
    mobileMenuBackdrop.classList.add('is-open');
    document.body.classList.add('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileMenuBackdrop.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  };

  burgerBtn.addEventListener('click', openMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMenu);

  mobileMenuBackdrop.addEventListener('click', event => {
    if (event.target === mobileMenuBackdrop) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenuBackdrop.classList.contains('is-open')) {
      closeMenu();
    }
  });

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}