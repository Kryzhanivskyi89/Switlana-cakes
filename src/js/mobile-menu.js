(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuLinks = document.querySelectorAll('.js-menu-container a');

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) return;

  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    openMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('modal-open');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('modal-open');
  };

  openMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  closeMenuBtn.addEventListener('click', closeMenu);
  menuLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
      openMenuBtn.focus();
    }
  });

  window.matchMedia('(min-width: 1024px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
})();
