const showTabScheme = () => {
  const scheme = document.getElementById('scheme-list'),
        tabItem = document.querySelectorAll('.scheme-nav__item'),
        schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block'),
        schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide');

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
};
export default showTabScheme;