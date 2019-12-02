
 const showListTel = () => {
  const telContacts = document.querySelectorAll('.header-contacts__phone-number')[1],
  headerContactsArrow = document.querySelector('.header-contacts__arrow');

  headerContactsArrow.addEventListener('click', () => {
    if (!telContacts.style.opacity || telContacts.style.opacity === '0') {
      telContacts.style.opacity = '1';
      telContacts.style.marginTop = '23px';
    } else {
      telContacts.style.opacity = '';
      telContacts.style.marginTop = '';
    }
  });
};

export default showListTel;