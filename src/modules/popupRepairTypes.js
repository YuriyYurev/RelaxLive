const popupRepairTypes = () => {
  const popupDialogRepairTypes = document.querySelector('.popup-dialog-repair-types'),//окно
  popupRepairTypesTab = document.querySelector('.popup-repair-types-tab'),//табы
  switchInner = document.getElementById('switch-inner');

  popupRepairTypesTab.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.popup-repair-types-nav__item ')) {
      switchInner.textContent = target.textContent;
    }
  });

};
export default popupRepairTypes;