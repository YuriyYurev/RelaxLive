const sendForm = () => {

  const sendFeedback = (feedback) => {
    const errorMessage = 'Произошла ошибка, данные не отправлены!',
  succesMessage = 'Спасибо! Мы скоро с вами свяжемся!',
  inputs = feedback.querySelectorAll('input'),
  statusMessage = document.createElement('div');
  const divMessage = document.createElement('div');

  feedback.addEventListener('submit', (event) => {
    event.preventDefault();
    statusMessage.remove();
    feedback.appendChild(divMessage);

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
        throw new Error(errorMessage);
      }
      divMessage.remove(); 
      feedback.appendChild(statusMessage);
      statusMessage.textContent = succesMessage;
      feedback.reset();

      inputs.forEach((item) => {
        item.classList.remove('success');
      });
    })
    .catch((error) => {

      divMessage.remove();
      feedback.appendChild(statusMessage);
      statusMessage.textContent = errorMessage;
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