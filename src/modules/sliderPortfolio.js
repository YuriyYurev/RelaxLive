const sliderPortfolio = () => {
  const portfolio = document.getElementById('portfolio'),
  portfolioIdSliderWrap = document.getElementById('portfolioIdSliderWrap'),
  portfolioSlider = document.querySelector('.portfolio-slider'),
  portfolioSliderSlide = document.querySelectorAll('.portfolio-slider__slide'),
  arrowLeft = document.getElementById('portfolio-arrow_left'),
  arrowRight = document.getElementById('portfolio-arrow_right');

  let sliideIndex = 0;
  arrowLeft.style.display = 'block';
  portfolioIdSliderWrap.style.overflow = 'hidden';
  portfolioIdSliderWrap.style.borderRadius = '20px';
  portfolioSlider.style.overflow = 'visible';
  portfolioSlider.style.transition = 'transform 0.5s';

  portfolio.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('#portfolio-arrow_right')) {
      sliideIndex++;
      portfolioSlider.style.transform = `translateX(-${portfolioSliderSlide[0].clientWidth * sliideIndex}px)`;
    }
  });
 
  // popup dialog portfolio
  const popupDialogPortfolio = document.querySelector('.popup-portfolio'),
  portfolioSliderSlideFrame = document.querySelectorAll('.portfolio-slider__slide-frame'),//фотки до всплытия окна
  popupPortfolioSlider = document.querySelector('.popup-portfolio-slider'),//обёртка фоток
  popupPortfolioText = document.querySelectorAll('.popup-portfolio-text'),//текст
  popupPortfolioSliderSlide = document.querySelectorAll('.popup-portfolio-slider__slide'),//фотка
  sliderCounterContentCurrent = popupDialogPortfolio.querySelector('.slider-counter-content__current'),//текущий счетчик
  sliderCounterContentTotal = popupDialogPortfolio.querySelector('.slider-counter-content__total'),//Весь счётчик
  arrowPopupLeft = document.getElementById('popup_portfolio_left'),
  arrowPopupRight = document.getElementById('popup_portfolio_right'),
  popupPortfolioCounter = document.getElementById('popup-portfolio-counter');//Счётчик
  console.log(popupPortfolioSliderSlide.length);


  let indexMainPopup = 0;
  sliderCounterContentTotal.textContent = popupPortfolioText.length;
  arrowPopupLeft.style.top = '5%';
  arrowPopupRight.style.top = '5%';
  popupPortfolioCounter.style.top = '8%';
  popupPortfolioSlider.style.transition = 'transform 0.5s';

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 1030) {
      arrowPopupLeft.style.top = '';
      arrowPopupRight.style.top = '';
      popupPortfolioCounter.style.top = '';
    } else {
      arrowPopupLeft.style.top = '5%';
      arrowPopupRight.style.top = '5%';
      popupPortfolioCounter.style.top = '8%';
    }
  });

  const popupShowDialogWindow = (index) => {
    let indexPopup = index;
    sliderCounterContentCurrent.textContent = index + 1;
    for(let i = 0; i < popupPortfolioText.length; i++) {
      popupPortfolioText[i].style.display = 'none';
    }
    popupPortfolioText[indexPopup].style.display = 'block';
    popupPortfolioSlider.style.transform = `translateY(-${popupPortfolioSliderSlide[0].clientHeight * indexPopup}px)`;

    indexMainPopup = indexPopup;
  };

  portfolio.addEventListener('click', (event) => {
    let target = event.target;

    for (let i = 0; i < portfolioSliderSlideFrame.length; i++) {
      if (target === portfolioSliderSlideFrame[i]) {
        popupDialogPortfolio.style.visibility = 'visible';
        popupShowDialogWindow(i - 10);
      }
    }
  });
  popupDialogPortfolio.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.close')) {
      popupDialogPortfolio.style.visibility = '';
    }

    if (target.closest('#popup_portfolio_right')) {
      indexMainPopup++;
      if (indexMainPopup > popupPortfolioSliderSlide.length - 1) {
        indexMainPopup = popupPortfolioSliderSlide.length - 1;
      }
      popupPortfolioSlider.style.transform = `translateY(-${popupPortfolioSliderSlide[0].clientHeight * indexMainPopup}px)`;
    }
    if (target.closest('#popup_portfolio_left')) {
      indexMainPopup--;
      if (indexMainPopup < 0) {
        indexMainPopup = 0;
      }
      popupPortfolioSlider.style.transform = `translateY(-${popupPortfolioSliderSlide[0].clientHeight * indexMainPopup}px)`;
    }
    sliderCounterContentCurrent.textContent = indexMainPopup + 1;
    for(let i = 0; i < popupPortfolioText.length; i++) {
      popupPortfolioText[i].style.display = 'none';
    }
    popupPortfolioText[indexMainPopup].style.display = 'block';
    
  });
};
export default sliderPortfolio;