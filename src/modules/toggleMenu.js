const toggleMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.menu__icon') || target.closest('.popup-dialog-menu') || target.closest('.popup-menu-nav')) {
        popupDialogMenu.style.transform = 'translate3d(0px,0,0)';
      } else {
        popupDialogMenu.style.transform = '';
      }
    if(target.closest('.popup-menu-nav__item') || target.closest('.link-list-menu') || target.closest('.close-menu')) {
      popupDialogMenu.style.transform = '';
    }
  });
};

export default toggleMenu;