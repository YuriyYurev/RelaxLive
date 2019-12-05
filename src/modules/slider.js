const slider = (element) => {
  const slide = element.querySelectorAll('.repair-types-slider__slide'),
        sliderCounterContentTotal = document.querySelector('.slider-counter-content__total'),//max count
        sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');//текущий
  
  sliderCounterContentTotal.textContent = slide.length;
        
  let slideIndex = 0;

  document.body.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('#repair-types-arrow_right')) {
      slideIndex++;
    }
    if (target.closest('#repair-types-arrow_left')) {
      slideIndex--;
    }
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    if (slideIndex > (slide.length - 1) ) {
      slideIndex = (slide.length - 1);
    }

    sliderCounterContentCurrent.textContent = slideIndex + 1;
    slide.forEach((item, index) => {
      if (index === slideIndex) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
};

export default slider;