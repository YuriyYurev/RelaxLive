const showDesign = () => {
  const designs = document.getElementById('designs'),
  designsNavItem = designs.querySelectorAll('.designs-nav__item'),
  previewBlock = designs.querySelectorAll('.preview-block'),
  designsSliderStyleOne = designs.querySelector('.designs-slider__style1'),
  designsList = document.getElementById('designs-list'),
  popupDesign = document.querySelector('.popup-design'),
  designCounter = document.getElementById('designs-counter'),
  counterTotal = designCounter.querySelector('.slider-counter-content__total'),
  counterCurrent = designCounter.querySelector('.slider-counter-content__current');

  let wdthTranslate = 0;

  const tabPreviewBlock = (slide, preview) => {
    let slideIdex = 0;

    const designsSliderStyleItem = slide.querySelectorAll('.designs-slider__style-slide'),
    previewItem = preview.querySelectorAll('.preview-block__item-inner');

    counterTotal.textContent = previewItem.length;
    slide.style.transition = 'transform 0.5s';
    for (let i = 0; i < previewItem.length; i++) {
      previewItem[i].classList.remove('preview_active');
      designsSliderStyleItem[slideIdex].style.display = '';
      previewItem[slideIdex].classList.add('preview_active');
    }
    preview.addEventListener('click', (e) => {
      let target = e.target;
      previewItem.forEach((item, index) => {
        if (target === item) {
          item.classList.add('preview_active');
          designsSliderStyleItem[index].style.display = '';
          slideIdex = index;
        } else {
          item.classList.remove('preview_active');
          designsSliderStyleItem[index].style.display = 'none';
        }
      });

    });
    designs.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('#design_right')) {
        slideIdex++;
        if (slideIdex > designsSliderStyleItem.length - 1) {
          slideIdex = designsSliderStyleItem.length - 1;
        }
        slide.style.transform = `translateY(-${designsSliderStyleItem[0].clientHeight * slideIdex}px)`;

      }
      if (target.closest('#design_left')) {
        slideIdex--;
        if (slideIdex < 0) {
          slideIdex = 0;
        }
        slide.style.transform = `translateY(-${designsSliderStyleItem[0].clientHeight * slideIdex}px)`;

      }
      counterCurrent.textContent = slideIdex + 1;
      if (target.closest('.designs-nav__item')) {
        slideIdex = 0;
        counterCurrent.textContent = 1;
        slide.style.transform = `translateY(-${designsSliderStyleItem[0].clientHeight * slideIdex}px)`;
      }
    });
  };

  tabPreviewBlock(designsSliderStyleOne, previewBlock[0]);

  designs.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.designs-nav__item')) {
      designsNavItem.forEach((item, index) => {
        if (target === item) {
          const designsSliderStyle = designs.querySelector('.designs-slider__style' + (index + 1));
          designsSliderStyle.style.display = '';
          previewBlock[index].classList.add('visible');
          item.classList.add('active');
          tabPreviewBlock(designsSliderStyle, previewBlock[index]);
        } else {
          const designsSliderStyle = designs.querySelector('.designs-slider__style' + (index + 1));
          designsSliderStyle.style.display = 'none';
          previewBlock[index].classList.remove('visible');
          item.classList.remove('active');
        }
      });
    }
    if (target.closest('.link-list-designs a')) {
      popupDesign.style.visibility = 'visible';
    }
  });

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 1135) {
      wdthTranslate = 0;
      designsList.style.transform = '';
    }
  });

  designs.addEventListener('click', (event) => {
    let target = event.target;

    if ( (document.documentElement.offsetWidth - designsList.getBoundingClientRect().right) < 10) {
      if (target.closest('#nav-arrow-designs_right')) {
        wdthTranslate -= 20;
        designsList.style.transform = `translateX(${wdthTranslate}%)`;
        }
    }
    if (target.closest('#nav-arrow-designs_left')) {
      wdthTranslate += 20;
      if (wdthTranslate > 0) {
        wdthTranslate = 0;
      }
      designsList.style.transform = `translateX(${wdthTranslate}%)`;
    }
  });
};
export default showDesign;