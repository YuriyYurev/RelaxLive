const showTransparency = () => {
  const transparency = document.getElementById('transparency'),
  popupTransparency = document.querySelector('.popup-transparency'),
  transparencyItemImg = document.querySelectorAll('.transparency-item__img'),
  popupTransparencySliderSlide = document.querySelectorAll('.popup-transparency-slider__slide'),
  sliderCounterContentCurrent = popupTransparency.querySelector('.slider-counter-content__current'),
  sliderCounterContentTCotal = popupTransparency.querySelector('.slider-counter-content__total');
  
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
};
export default showTransparency;