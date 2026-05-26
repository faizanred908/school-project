// alert("This is a dummy website");

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-menu');
  const closeBtn = document.querySelector('.close-menu');
  const nav = document.querySelector('.menu-link');
  const menuList = document.querySelector('.menu-list');
  const mainContent = document.querySelector('main');
  const logoContainer = document.querySelector('.logo-container');

  if (openBtn && closeBtn && nav && menuList) {
    // Set initial state: if on mobile, the hidden menu should be inert
    const isMobile = () => window.matchMedia('(max-width: 1035px)').matches;
    if (isMobile()) menuList.inert = true;

    const openMenu = () => {
      nav.classList.add('nav-open');
      menuList.inert = false;
      if (mainContent) mainContent.inert = true;
      if (logoContainer) logoContainer.inert = true;
    };

    const closeMenu = () => {
      nav.classList.remove('nav-open');
      menuList.inert = true;
      if (mainContent) mainContent.inert = false;
      if (logoContainer) logoContainer.inert = false;
    };

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Close menu when clicking outside of the menu list
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = menuList.contains(event.target);
      const isClickOnOpenBtn = openBtn.contains(event.target);

      if (nav.classList.contains('nav-open') && !isClickInsideMenu && !isClickOnOpenBtn) {
        closeMenu();
      }
    });
  }
});
