const tabs = () => {
  const tab = document.getElementById('scheme-list'),
        tabItem = document.querySelectorAll('.scheme-nav__item'),
        schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block'),
        schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide');

  tab.addEventListener('click', (event) => {
    let target = event.target;
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
            schemeSliderSlide[i].style.bottom = i * schemeSliderSlide[i].clientHeight + 'px';
          } else {
            schemeSliderSlide[i].style.bottom = '';
          }
        }
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
};

export default tabs;