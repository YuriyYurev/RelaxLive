const getConsultation = () => {
  const popupConsultation = document.querySelector('.popup-consultation');

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.button_wide')) {
      popupConsultation.style.visibility = 'visible';
    }

  });
  popupConsultation.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.close-consultation') || !target.closest('.feedback-wrap')) {
      popupConsultation.style.visibility = '';
    }
  });
};
export default getConsultation;