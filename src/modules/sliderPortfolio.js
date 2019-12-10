const sliderPortfolio = () => {
  const portfolio = document.getElementById('portfolio'),
  portfolioSlider = document.querySelector('.portfolio-slider'),
  portfolioSliderSlide = document.querySelectorAll('.portfolio-slider__slide'),
  arrowLeft = document.getElementById('portfolio-arrow_left'),
  arrowRight = document.getElementById('portfolio-arrow_right');

  let slideIndex = 0;
  portfolioSlider.style.transition = 'transform 0.5s';

  portfolio.addEventListener('click', (event) => {
    let target = event.target;
   
      if (target.closest('#portfolio-arrow_right')) {
        slideIndex++;
        for (let i = 0; i < portfolioSliderSlide.length; i++) {
          portfolioSliderSlide[i].style.transform = `translateX(-${portfolioSliderSlide[0].clientWidth * slideIndex}px)`;
        }
      }
      if (target.closest('#portfolio-arrow_left')) {
        slideIndex--;
        for (let i = 0; i < portfolioSliderSlide.length; i++) {
          portfolioSliderSlide[i].style.transform = `translateX(-${portfolioSliderSlide[0].clientWidth * slideIndex}px)`;
        }
      
      }
      if (document.documentElement.clientWidth - portfolioSliderSlide[4].getBoundingClientRect().right < -250) {
        arrowRight.style.display = 'flex';
      } else {
        arrowRight.style.display = 'none';
      }
      portfolioSliderSlide[4].getBoundingClientRect();
      if (slideIndex > 0) {
        arrowLeft.style.display = 'flex';
      } else {
        arrowLeft.style.display = 'none';
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
  popupPortfolioCounter = document.getElementById('popup-portfolio-counter'),//Счётчик
  counterMobileCurrent = portfolio.querySelector('.slider-counter-content__current'),
  counterMobileTotal = portfolio.querySelector('.slider-counter-content__total'),
  arrowLeftMobile = document.getElementById('portfolio-arrow-mobile_left'),
  arrowRightMobile = document.getElementById('portfolio-arrow-mobile_right'),
  portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile'),
  mobileSlideFrame = portfolioSliderMobile.querySelectorAll('.portfolio-slider__slide-frame');

  let indexMainPopup = 0;
  let mobileIndex = 0;
  sliderCounterContentTotal.textContent = popupPortfolioText.length;
  counterMobileTotal.textContent = mobileSlideFrame.length;
  arrowLeftMobile.style.zIndex = 20;
  arrowRightMobile.style.zIndex = 20;
  arrowPopupLeft.style.top = '5%';
  arrowPopupRight.style.top = '5%';
  popupPortfolioCounter.style.top = '8%';
  for (let i = 0; i < portfolioSliderSlide.length; i++) {
    portfolioSliderSlide[i].style.transition = 'transform 0.5s';
  }
  for (let i = 0; i < mobileSlideFrame.length; i++) {
    mobileSlideFrame[i].style.transition = 'transform 0.5s';
  }
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
    if (document.documentElement.clientWidth > 1020) {
      for (let i = 0; i < portfolioSliderSlideFrame.length; i++) {
        if (target === portfolioSliderSlideFrame[i]) {
          popupDialogPortfolio.style.visibility = 'visible';
          popupShowDialogWindow(i - 10);
        }
      }
    }
    //mobile arrow
    if (target.closest('#portfolio-arrow-mobile_left')) {
      mobileIndex--;
      if (mobileIndex < 0) {
        mobileIndex = 0;
      }
      for (let i = 0; i < mobileSlideFrame.length; i++) {
        mobileSlideFrame[i].style.transform = `translateY(-${mobileSlideFrame[0].clientHeight * mobileIndex}px)`;
      }
    }
    if (target.closest('#portfolio-arrow-mobile_right')) {
      mobileIndex++;
      if (mobileIndex > mobileSlideFrame.length - 1) {
        mobileIndex = mobileSlideFrame.length - 1;
    }
      for (let i = 0; i < mobileSlideFrame.length; i++) {
        mobileSlideFrame[i].style.transform = `translateY(-${mobileSlideFrame[0].clientHeight * mobileIndex}px)`;
      }
    }
    counterMobileCurrent.textContent = mobileIndex + 1;
  });

  popupDialogPortfolio.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.close') || !target.closest('.popup-dialog-portfolio')) {
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

  //mobile
  
};
export default sliderPortfolio;