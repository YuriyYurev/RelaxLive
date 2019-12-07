const formulaSuccess = () => {
  const formula = document.getElementById('formula'),
  formulaItemIcon = document.querySelectorAll('.formula-item');

  formula.addEventListener('mouseover', (event) => {
    let target = event.target;

      formulaItemIcon.forEach((item) => {
        if (target === item) {
          item.classList.add('active-item');
        } else {
          item.classList.remove('active-item');
        }

      });

  });
};
export default formulaSuccess;