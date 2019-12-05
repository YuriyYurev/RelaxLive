const repairTypes = (slider) => {
  const navList = document.querySelector('.nav-list'),
  repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');
  let sl = document.querySelector('.types-repair1');
  slider(sl);
  navList.addEventListener('click', (event) => {

    let target = event.target;
    if (target.closest('.repair-types-nav__item')) {
    repairTypesNavItem.forEach((item, index) => {
      if (target === item) {
        let wrapSlide = document.querySelector('.types-repair' + (index + 1));
        wrapSlide.style.display = '';
        slider(wrapSlide);
        item.classList.add('active');
      } else {
        document.querySelector('.types-repair' + (index + 1)).style.display = 'none';
        item.classList.remove('active');
      }
    });
    }
  });
};

export default repairTypes;