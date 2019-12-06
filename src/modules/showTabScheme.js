const showTabScheme = () => {
  const scheme = document.getElementById('scheme-list'),
        schemeParrent = document.getElementById('scheme'),
        tabItem = document.querySelectorAll('.scheme-nav__item'),
        schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block'),
        schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide');
        let wdthTranslate = 0;

  scheme.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.scheme-nav__item')) {
    tabItem.forEach((item, index) => {
      if (target === item) {
        for (let i = 0; i < schemeDescriptionBlock.length; i++) {
          if (index === i) {
            schemeDescriptionBlock[i].classList.add('visible-content-block');
          } else {
            schemeDescriptionBlock[i].classList.remove('visible-content-block');
          }
        }
        for (let i = 0; i < schemeSliderSlide.length; i++) {
          if (index === i) {
            schemeSliderSlide[i].style.display = '';
          } else {
            schemeSliderSlide[i].style.display = 'none';
          }
        }
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    }
  });

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 1135) {
      wdthTranslate = 0;
      scheme.style.transform = '';
    }
  });

  schemeParrent.addEventListener('click', (event) => {
    let target = event.target;

    if ( (document.documentElement.offsetWidth - scheme.getBoundingClientRect().right) < 60) {
      if (target.closest('#nav-arrow-scheme_right')) {
        wdthTranslate -= 10;
        scheme.style.transform = `translateX(${wdthTranslate}%)`;
        }
    }
    if (target.closest('#nav-arrow-scheme_left')) {
      wdthTranslate += 10;
      if (wdthTranslate > 0) {
        wdthTranslate = 0;
      }
      scheme.style.transform = `translateX(${wdthTranslate}%)`;
    }
  });
};
export default showTabScheme;