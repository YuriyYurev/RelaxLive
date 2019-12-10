const popupRepairTypes = () => {
  const navListPopupRepair = document.querySelector('.nav-list-popup-repair'),
  popupRepairTypesContent = document.querySelector('.popup-repair-types-content'),
  propupReapirTypeContentTable = document.querySelector('.popup-repair-types-content-table'),
  switchInner = document.getElementById('switch-inner');


  document.body.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`.no-overflow`) || target.closest(`.link-list-repair`) ) {

      const postData = () => fetch(`./db/db.json`); 
      postData()
        .then((response) => {
          if ( response.status !== 200 ) {
            throw new Error('Ошибка!!!');
          }
          response.json()
        .then(data => {
          
          data.forEach((item, index) => {
            //Табы
            const divItemTab = document.createElement('button');
            divItemTab.classList.add('button_o', 'popup-repair-types-nav__item');
            divItemTab.textContent = item.title;
            navListPopupRepair.appendChild(divItemTab);

            //content
            const tableDivItem = document.createElement('table'),
            tableBlodyDiveItem = document.createElement('tbody');
            tableDivItem.appendChild(tableBlodyDiveItem);
            tableDivItem.classList.add('popup-repair-types-content-table__list');

            //создаю строки
            propupReapirTypeContentTable.appendChild(tableDivItem);
            for (let i = 0; i < item.priceList.length; i++) {
              if (item.priceList[i].units === 'м2') {
                item.priceList[i].units = 'м<sup>2</sup>';
              }
              tableBlodyDiveItem.innerHTML += `<tr class="mobile-row">
              <td class="repair-types-name">${item.priceList[i].typeService}</td>
              <td class="repair-types-value">${item.priceList[i].units}</td>
              <td class="repair-types-value">${item.priceList[i].cost}</td>
              </tr>`;
            }
          });
            
          const navTabs = document.querySelectorAll('.popup-repair-types-nav__item'),
          tableItem = document.querySelectorAll('.popup-repair-types-content-table__list');
          navListPopupRepair.addEventListener('click', (event) => {
            let target = event.target;
            for (let i = 0; i < navTabs.length; i++) {
              if (target === navTabs[i]) {
                tableItem[i].style.display = 'block';
                switchInner.textContent = navTabs[i].textContent;
              } else {
                tableItem[i].style.display = 'none';
              }
            }
          });
          });
        })
        .catch( (error) => console.log(error));
    }
  });

};
export default popupRepairTypes;