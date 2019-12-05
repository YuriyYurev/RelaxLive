const accordion = () => {
  const faq = document.getElementById('faq'),
      accordionTitle = faq.querySelectorAll('.title_block');
  
  for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].classList.remove('msg-active');
  }

  faq.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.title_block')) {
      accordionTitle.forEach((item) => {
        if (target === item) {
          item.classList.toggle('msg-active');
        }
      });
    }
  });
};
export default accordion;