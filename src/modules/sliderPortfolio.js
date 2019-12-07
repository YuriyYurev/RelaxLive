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

};
export default sliderPortfolio;