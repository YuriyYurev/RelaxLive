
 const showListTel = () => {
  const telContacts = document.querySelectorAll('.header-contacts__phone-number')[1],
  headerContactsArrow = document.querySelector('.header-contacts__arrow');

  headerContactsArrow.addEventListener('click', () => {
    if (!telContacts.style.opacity || telContacts.style.opacity === '0') {
      telContacts.style.opacity = '1';
      telContacts.style.marginTop = '20px';
    } else {
      telContacts.style.opacity = '0';
      telContacts.style.marginTop = '0px';
    }
  });
};

export default showListTel;