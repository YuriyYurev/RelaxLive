const sliderReviews = () => {

    const reviewsSliderSlide = document.querySelectorAll('.reviews-slider__slide');
    let slideIndex = 0;
  
    document.body.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('#reviews-arrow_right')) {
        slideIndex++;
      }
      if (target.closest('#reviews-arrow_left')) {
        slideIndex--;
      }
      if (slideIndex < 0) {
        slideIndex = (reviewsSliderSlide.length - 1);
      }
      if (slideIndex > (reviewsSliderSlide.length - 1) ) {
        slideIndex = 0;
      }
  
      reviewsSliderSlide.forEach((item, index) => {
        if (index === slideIndex) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });

};
export default sliderReviews;