const toggleMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.menu__icon') || target.closest('.close.close-menu') || target.closest('.menu-link')) {
      if (!popupDialogMenu.style.transform) {
        popupDialogMenu.style.transform = 'translate3d(0px,0,0)';
      } else {
        popupDialogMenu.style.transform = '';
      }
    }
  });
};

export default toggleMenu;