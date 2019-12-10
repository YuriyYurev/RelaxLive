const showRepairAndPrivacy = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types'),
        popupPrivacy = document.querySelector('.popup-privacy');

  const showType = (selector, types, target) => {
    if (target.closest(selector)) {
      types.style.visibility = 'visible';
    }
  };

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    showType('.link-list', popupRepairTypes, target);
    showType('.link-privacy', popupPrivacy, target);
  });
  popupRepairTypes.addEventListener('click', (event) => {
    if (!event.target.closest('.popup-dialog-repair-types') || event.target.closest('.close')) {
      popupRepairTypes.style.visibility = '';
      const itemNav = document.querySelectorAll('.popup-repair-types-nav__item'),
      tableItem = document.querySelectorAll('.popup-repair-types-content-table__list');
      for (let i = 0; i < itemNav.length; i ++) {
        itemNav[i].remove();
        tableItem[i].remove();
      }
    }
  });
  popupPrivacy.addEventListener('click', (event) => {
    let target = event.target;
    if (!target.closest('.popup-dialog-privacy') || target.closest('.close')) {
      popupPrivacy.style.visibility = '';
    }
  });
};

export default showRepairAndPrivacy;