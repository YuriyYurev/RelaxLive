const showTransparency = () => {
  const transparency = document.getElementById('transparency'),
  popupTransparency = document.querySelector('.popup-transparency'),
  transparencyItemImg = document.querySelectorAll('.transparency-item__img'),
  popupTransparencySliderSlide = document.querySelectorAll('.popup-transparency-slider__slide'),
  sliderCounterContentCurrent = popupTransparency.querySelector('.slider-counter-content__current'),
  sliderCounterContentTCotal = popupTransparency.querySelector('.slider-counter-content__total'),
  transparencySlider = transparency.querySelector('.transparency-slider'),
  transparencyItem = transparency.querySelectorAll('.transparency-item'),
  leftArrow = document.getElementById('transparency-arrow_left'),
  rightArrow = document.getElementById('transparency-arrow_right');
  let slideIndex = 0;
  
  const hideTransparencyItem = (a) => {
    for (let i = 0; i < transparencyItem.length; i++) {
      transparencyItem[i].style.display = 'none';
    }
    transparencyItem[a].style.display = '';
  };

  sliderCounterContentTCotal.textContent = popupTransparencySliderSlide.length;
  transparency.addEventListener('click', (event) => {
    let slideIndex = 0;
    let target = event.target;
    for (let i = 0; i < transparencyItemImg.length; i++) {
      if (target === transparencyItemImg[i]) {
        slideIndex = i;
      }
    }
    
    for (let i = 0; i < popupTransparencySliderSlide.length; i++) {
      if (i === slideIndex) {
        popupTransparencySliderSlide[slideIndex].style.display = '';
      } else {
        popupTransparencySliderSlide[i].style.display = 'none';
      }
    }

    if (target.closest('.transparency-item__img')) {
      popupTransparency.style.visibility = 'visible';
    }
    sliderCounterContentCurrent.textContent = slideIndex + 1;
    popupTransparency.addEventListener('click', (e) => {
      let target = e.target;

      if (target.closest('#transparency_right')) {
        slideIndex++;
      }

      if (target.closest('#transparency_left')) {
        slideIndex--;
      }
      if (slideIndex < 0) {
        slideIndex = (popupTransparencySliderSlide.length - 1);
      }
      if (slideIndex > (popupTransparencySliderSlide.length - 1) ) {
        slideIndex = 0;
      }
      for (let i = 0; i < popupTransparencySliderSlide.length; i++) {
        if (i === slideIndex) {
          popupTransparencySliderSlide[slideIndex].style.display = '';
        } else {
          popupTransparencySliderSlide[i].style.display = 'none';
        }
      }

      if (target.closest('.close')) {
        popupTransparency.style.visibility = '';
      }
      sliderCounterContentCurrent.textContent = slideIndex + 1;
    });
  });

  window.addEventListener('resize', () => {

    if (document.documentElement.offsetWidth > 1090) {
      transparencyItem.forEach(item => {
        item.style.display = '';
      });
    } else {
      slideIndex = 0;
      hideTransparencyItem(slideIndex);
    }
  });

  leftArrow.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    hideTransparencyItem(slideIndex);
  });
  rightArrow.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > 2) {
      slideIndex = 2;
    }
    hideTransparencyItem(slideIndex);
  });
  
};
export default showTransparency;