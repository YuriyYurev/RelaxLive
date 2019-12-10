const sendForm = () => {
  const popupThank = document.querySelector('.popup-thank'),
  closeThank = popupThank.querySelector('.close-thank');
  closeThank.addEventListener('click', () => {
    popupThank.style.visibility = 'hidden';
  });
  const sendFeedback = (feedback) => {

  feedback.addEventListener('submit', (event) => {
    event.preventDefault();
    const check = feedback.querySelector('.checkbox__input');
    if (check.checked === false) {
      return;
    }
    const formData = new FormData(feedback);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    };
  postData(body)
    .then((response) => {
      if ( response.status !== 200 ) {
        throw new Error('ошибка');
      }
      feedback.reset();
      setTimeout(() => {
        popupThank.style.visibility = 'visible';
        }, 1000);
    })
    .catch((error) => {
      feedback.reset();
      console.error(error);
    });
  });
  };
  for (let i = 1; i < 7; i++) {
    const feedback = document.getElementById('feedback' + i);
    sendFeedback(feedback);
  }
};
export default sendForm;