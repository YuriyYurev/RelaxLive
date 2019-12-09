const formulaSuccess = () => {
  const formula = document.getElementById('formula'),
  formulaItemIcon = document.querySelectorAll('.formula-item__icon'),
  styleOne = document.createElement(`style`);

  styleOne.textContent = `.formula-item-popup::before {
      transform: rotate(180deg);
    }
  `;
  
  formulaItemIcon.forEach( (item) => {
    item.addEventListener('mouseover', () => {
      item.children[1].style.opacity = 1;
      if ((item.children[0].clientHeight > item.getBoundingClientRect().top)) {
          item.children[0].style.transform = 'translateY(180%)';
          item.parentNode.style.zIndex = 1;
          document.head.appendChild(styleOne);
      } else if ((item.children[0].clientHeight < item.getBoundingClientRect().top)) {
          item.parentNode.style.zIndex = 1;
          item.children[0].style.transform = '';
      }
      item.children[0].style.visibility = 'visible';
      item.children[0].style.opacity = 12121;
    });
    item.addEventListener('mouseout', () => {
      item.children[1].style.opacity = 0;
      item.children[0].style.opacity = 0;
      item.children[0].style.visibility = '';
      item.parentNode.style.zIndex = 0;
      if ( styleOne.parentNode === document.head ) {
        styleOne.parentNode.removeChild(styleOne);
      }
    }); 
  });

  //mobile display
  const formulaSliderSlide = document.querySelectorAll('.formula-slider__slide'),
  formulaSlider = document.querySelector('.formula-slider');

  formulaSlider.style.marginBottom = '200px';

  formulaSlider.style.display = 'flex';
  for (let i = 0; i < formulaSliderSlide.length; i++) {
    if (document.documentElement.clientWidth < 768) {
      for (let i = 0; i < formulaSliderSlide.length; i++) {
        formulaSliderSlide[i].style.flex = '0 0 100%';
        formulaSliderSlide[0].classList.add('active-item');
      }
    } else if (document.documentElement.clientWidth < 1035) {
      for (let i = 0; i < formulaSliderSlide.length; i++) {
        formulaSliderSlide[i].style.flex = '0 0 33%';  
        formulaSliderSlide[1].classList.add('active-item');   
      }
    }
  }
  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 768) {
      for (let i = 0; i < formulaSliderSlide.length; i++) {
        formulaSliderSlide[i].style.flex = '0 0 100%';
        formulaSliderSlide[0].classList.add('active-item'); 
      }
    } else if (document.documentElement.clientWidth < 1035) {
      for (let i = 0; i < formulaSliderSlide.length; i++) {
        formulaSliderSlide[i].style.flex = '0 0 33%';     
        formulaSliderSlide[1].classList.add('active-item'); 
      }
    }
  });
  formula.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('#formula-arrow_right')) {
      const slide = document.querySelectorAll('.formula-slider__slide');
      formulaSlider.insertBefore(slide[0], slide[slide.length]);
      for (let i = 0; i < slide.length; i++) {
        if (document.documentElement.clientWidth < 768) {
          slide[i].classList.remove('active-item');
          slide[1].classList.add('active-item');
        } else if (document.documentElement.clientWidth < 1035) {
          slide[i].classList.remove('active-item');
          slide[2].classList.add('active-item'); 
        }
      }
    }
    if (target.closest('#formula-arrow_left')) {
      const slide = document.querySelectorAll('.formula-slider__slide');
      formulaSlider.insertBefore(slide[slide.length - 1], slide[0]);
      for (let i = 0; i < slide.length; i++) {
        if (document.documentElement.clientWidth < 768) {
          slide[i].classList.remove('active-item');
          slide[5].classList.add('active-item');
        } else if (document.documentElement.clientWidth < 1035) {
          slide[i].classList.remove('active-item');
          slide[0].classList.add('active-item'); 
        }
      }
    }
  });
};
export default formulaSuccess;