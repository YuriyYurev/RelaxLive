const showDesign = () => {
  const designs = document.getElementById('designs'),
  designsNavItem = designs.querySelectorAll('.designs-nav__item'),
  previewBlock = designs.querySelectorAll('.preview-block'),
  designsSliderStyleOne = designs.querySelector('.designs-slider__style1');

  const tabPreviewBlock = (slide, preview) => {
    let slideIdex = 0;

    const designsSliderStyleItem = slide.querySelectorAll('.designs-slider__style-slide'),
    previewItem = preview.querySelectorAll('.preview-block__item-inner');
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
  });
};
export default showDesign;