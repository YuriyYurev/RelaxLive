const getConsultation = () => {
  const buttonConsultation = document.querySelectorAll('.button_wide'),
  popupConsultation = document.querySelector('.popup-consultation');

  document.body.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.button_wide')) {
      popupConsultation.style.visibility = 'visible';
    }
    if (target.closest('.close-consultation')) {
      popupConsultation.style.visibility = '';
    }
  });
};
export default getConsultation;
