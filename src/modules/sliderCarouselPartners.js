const sliderCarouselPartners = () => {
  const partners = document.getElementById('partners'),
  partnersSliderSlide = partners.querySelectorAll('.partners-slider__slide');

  let slideIndex = 0;
  
  const hideSlide = (a) => {
    for (let i = 0; i < partnersSliderSlide.length; i++) {
      if (i === a) {
        partnersSliderSlide[i].style.display = '';
      } else {
        partnersSliderSlide[i].style.display = 'none';
      }
    }
  };
  hideSlide(0);

  partners.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('#partners-arrow_right')) {
      slideIndex++;
    }
    if (target.closest('#partners-arrow_left')) {
      slideIndex--;
    }
    if (slideIndex > partnersSliderSlide.length - 1) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = partnersSliderSlide.length - 1;
    }
    hideSlide(slideIndex);
  });
};
export default sliderCarouselPartners;