const repairTypes = (slider) => {
  const navList = document.querySelector('.nav-list'),
  repairTypes = document.getElementById('repair-types'),
  repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');
  let sl = document.querySelector('.types-repair1'),
      wdthTranslate = 0;
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

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 1024) {
      wdthTranslate = 0;
      navList.style.transform = '';
    }
  });

  repairTypes.addEventListener('click', (event) => {
    let target = event.target;

    if ( (document.documentElement.offsetWidth - navList.getBoundingClientRect().right) < 60) {
      if (target.closest('#nav-arrow-repair-right_base')) {
        wdthTranslate -= 20;
        navList.style.transform = `translateX(${wdthTranslate}%)`;
        }
    }
    if (target.closest('#nav-arrow-repair-left_base')) {
      wdthTranslate += 20;
      if (wdthTranslate > 0) {
        wdthTranslate = 0;
      }
      navList.style.transform = `translateX(${wdthTranslate}%)`;
    }
  });
};

export default repairTypes;