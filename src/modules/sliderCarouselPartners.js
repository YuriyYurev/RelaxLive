const sliderCarouselPartners = () => {
  const partnersSlider = document.querySelector('.partners-slider'),
      partnersWrapper = document.querySelector('.partners>.wrapper'),
      partnersSliderSlide = document.querySelectorAll('.partners-slider__slide');
      let percent = 33;

  const carousel = () => {
    partnersSlider.style.display = 'flex';
    partnersWrapper.style.overflow = 'hidden';
    partnersSlider.style.justifyContent = 'space-around';
    partnersSlider.style.transform = `translateX(${percent}%)`;

    partnersSliderSlide.forEach(item => {
      item.style.flex = `0 0 ${percent}%`;
      item.style.margin = '0 auto';
    });
    let widthSlide = partnersSliderSlide[0].clientWidth;
    partnersWrapper.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('#partners-arrow_right')) {
        widthSlide -= partnersSliderSlide[0].clientWidth;
        if (widthSlide < -partnersSliderSlide[0].clientWidth) {
          widthSlide = partnersSliderSlide[0].clientWidth;
        }
        partnersSlider.style.transform = `translateX(${widthSlide}px)`;
      }
      if (target.closest('#partners-arrow_left')) {
        widthSlide += partnersSliderSlide[0].clientWidth;
        if (widthSlide > partnersSliderSlide[0].clientWidth) {
          widthSlide = -partnersSliderSlide[0].clientWidth;
        }
        partnersSlider.style.transform = `translateX(${widthSlide}px)`;
      }
    });
  };
  carousel();
};
export default sliderCarouselPartners;