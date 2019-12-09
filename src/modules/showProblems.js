const showProblems = () => {
  const problemsItemIcon = document.querySelectorAll(`.problems-item__icon`),
  problems = document.getElementById('problems');

  const styleOne = document.createElement(`style`),
  styleTwo = document.createElement(`style`);

  styleOne.textContent = `.problems-item-popup::before {
      transform: rotate(180deg);
    }
  `;
  styleTwo.textContent = `.problems-item-popup::before {
      transform: rotate(0deg);
    }
  `;
    
  problemsItemIcon.forEach((item, index) => {
    if (document.documentElement.clientWidth > 1035) {
      item.addEventListener('mouseover', () => {
        item.children[1].style.opacity = 1;
        if (index === 0) {
          if (item.children[0].clientHeight > (document.documentElement.clientHeight - item.getBoundingClientRect().bottom)) {
            item.children[0].style.transform = 'translateY(-150%)';
            document.head.appendChild(styleTwo);
            item.parentNode.style.zIndex = 1;
          } else if (item.children[0].clientHeight < (document.documentElement.clientHeight - item.getBoundingClientRect().bottom)) {
            item.children[0].style.transform = 'translateY(5px)';
            item.parentNode.style.zIndex = 1;
          }
          item.children[0].style.visibility = 'visible';
          item.children[0].style.opacity = 1;
        } else {
          if (item.children[0].clientHeight > item.getBoundingClientRect().top) {
            item.children[0].style.transform = 'translateY(150%)';
            document.head.appendChild(styleOne);
            item.parentNode.style.zIndex = 1;
          } else if (item.children[0].clientHeight < item.getBoundingClientRect().top) {
              item.children[0].style.transform = 'translateY(5px)';
              item.parentNode.style.zIndex = 1;
          } 
          item.children[0].style.visibility = 'visible';
          item.children[0].style.opacity = 1;
        }
        
      });
      item.addEventListener(`mouseout`, () => {
        item.children[1].style.opacity = 0;
        item.children[0].style.visibility = `hidden`;
        item.children[0].style.opacity = 0;
        item.parentNode.style.zIndex = 0;
        if (styleOne.parentNode === document.head) {
          styleOne.parentNode.removeChild(styleOne);
        }
        if (styleTwo.parentNode === document.head) {
          styleTwo.parentNode.removeChild(styleTwo);
        }
      });
    }
  });

  //mobile
  const problemsSliderSlide = document.querySelectorAll('.problems-slider__slide'),
  problemsSlider = document.querySelector('.problems-slider');
  let slideIndex = 0;

  const hideSlideProblem = (index) => {
    for (let i = 0; i < problemsSliderSlide.length; i++) {
      problemsSliderSlide[i].style.display = 'none';
      problemsSliderSlide[i].classList.remove('active-item');
    }
    problemsSliderSlide[index].style.display = '';
    problemsSliderSlide[index].classList.add('active-item');
  };

  hideSlideProblem(0);
  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 1035) {
      slideIndex = 0;
    }
  });

  problems.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('#problems-arrow_right')) {
      slideIndex++;
      if(slideIndex > problemsSliderSlide.length - 1) {
        slideIndex = problemsSliderSlide.length - 1;
      }
      hideSlideProblem(slideIndex);
    }
    if (target.closest('#problems-arrow_left')) {
      slideIndex--;
      if(slideIndex < 0) {
        slideIndex = 0;
      }
      hideSlideProblem(slideIndex);
    }
  });
};

export default showProblems;