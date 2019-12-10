const popupDialogDesign = () => {

  const popupDesign = document.querySelector('.popup-design'), 
  designsNavItemPopup = document.querySelectorAll('.designs-nav__item_popup'),
  popupDesignText = document.querySelectorAll('.popup-design-text'),
  sliderCounterContentTotal = popupDesign.querySelector('.slider-counter-content__total'),
  sliderCounterContentCurrent = popupDesign.querySelector('.slider-counter-content__current');
  const popupDesignSlider = document.querySelector('.popup-designs-slider__style1');

  for (let i = 1; i < 6; i++) {
    const slide = document.querySelector('.popup-designs-slider__style' + i);
    slide.style.transition = 'transform 0.5s';
  }

  const showDesignBlock = (slider) => {
    let slideIdex = 0;
    const designBlockItem = slider.querySelectorAll('.popup-design-slider__style-slide');
    sliderCounterContentTotal.textContent = designBlockItem.length;
    popupDesign.addEventListener('click', (event) => {
      const target = event.target;

      if (target.closest('#popup_design_right')) {
        slideIdex++;
        if (slideIdex > designBlockItem.length - 1) {
          slideIdex = designBlockItem.length - 1;
        }
      }
      if (target.closest('#popup_design_left')) {
        slideIdex--;
        if (slideIdex < 0) {
          slideIdex = 0;
        }
      }
      sliderCounterContentCurrent.textContent = slideIdex + 1;
      slider.style.transform = `translateY(-${designBlockItem[0].clientHeight * slideIdex}px)`;
      if (target.closest('.designs-nav__item_popup')) {
        slideIdex = 0;
        slider.style.transform = `translateY(-${designBlockItem[0].clientHeight * slideIdex}px)`;
        sliderCounterContentCurrent.textContent = slideIdex + 1;
      }
    });
    
  };
  showDesignBlock(popupDesignSlider);

  popupDesign.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.close') || !target.closest('.popup-dialog-design')) {
      popupDesign.style.visibility = '';
    }

    if (target.closest('.designs-nav__item_popup')) {
      designsNavItemPopup.forEach((item, index) => {
        if (target === item) {
          const popupDesignSlider = document.querySelector('.popup-designs-slider__style' + (index + 1));
          popupDesignSlider.style.display = '';
          showDesignBlock(popupDesignSlider);
          item.classList.add('active');
          popupDesignText[index].classList.add('visible-content-block');
        } else {
          const popupDesignSlider = document.querySelector('.popup-designs-slider__style' + (index + 1));
          popupDesignSlider.style.display = 'none';
          item.classList.remove('active');
          popupDesignText[index].classList.remove('visible-content-block');
        }
      });
    }
  });
};
export default popupDialogDesign;