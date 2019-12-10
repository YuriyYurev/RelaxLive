const sendForm = () => {
  const popupThank = document.querySelector('.popup-thank'),
  closeThank = popupThank.querySelector('.close-thank');
  closeThank.addEventListener('click', () => {
    popupThank.style.visibility = 'hidden';
  });
  const sendFeedback = (feedback) => {
    let divWatched = document.createElement('div');
        divWatched.style.cssText = `
          text-align: center;
          color: #fead16;
          font-size: 15px;
          
        `;
  feedback.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.appendChild(divWatched);
    let input = feedback.querySelectorAll('input');
    for (let i = 0; i < input.length; i++) {
      if (input[i].name === 'phone') {
        if (input[i].value < 18) {
          divWatched.textContent = 'Поле не заполнено!';
          return;
        }
      }
    }
    const check = feedback.querySelector('.checkbox__input');
    if (check.checked === false) {
      divWatched.textContent = 'Чекбокс не отмечен!';
      return;
    }
    divWatched.remove();
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