const showRepairAndPrivacy = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types'),
        popupPrivacy = document.querySelector('.popup-privacy');

  const showType = (selector, types, btnClose, target) => {
    if (target.closest(selector)) {
      types.style.visibility = 'visible';
    }
    if (target.closest(btnClose)) {
      types.style.visibility = '';
    }
  };

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    showType('.link-list', popupRepairTypes, '.close', target);
    showType('.link-privacy', popupPrivacy, '.close', target);
  });
  
};

export default showRepairAndPrivacy;