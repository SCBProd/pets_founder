const burgerBtn = document.querySelector('.header-burger-btn');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
const closeMenuBtn = document.querySelector('.mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-btn');

if (burgerBtn && mobileMenuBackdrop && closeMenuBtn) {
  const openMenu = () => {
    mobileMenuBackdrop.classList.add('is-open');
    document.body.classList.add('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenuBackdrop.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    mobileMenuBackdrop.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBackdrop.setAttribute('aria-hidden', 'true');
  };

  burgerBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  mobileMenuBackdrop.addEventListener('click', event => {
    if (event.target === mobileMenuBackdrop) {
      closeMenu();
    }
  });

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenuBackdrop.classList.contains('is-open')) {
      closeMenu();
    }
  });
}