function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  function makeHoliday (holidaySting) {

    let docButtons = document.querySelector('.buttons-container');
    let holidayButton = document.createElement('button');
    holidayButton.innerText = holidaySting;
    holidayButton.id = 'btn-holiday';
    docButtons.appendChild(holidayButton);

  }
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let docDays = document.querySelector('#days');

  for (indexDays in dezDaysList) {

    let addDays = document.createElement('li');
    addDays.innerText = dezDaysList[indexDays];
    addDays.className = 'day';

    if (dezDaysList[indexDays] === 24 || dezDaysList[indexDays] === 25 || dezDaysList[indexDays] ===31) {

      addDays.className += ' holiday';

    }

    if (dezDaysList[indexDays] === 4 || dezDaysList[indexDays] === 11 || dezDaysList[indexDays] === 18 || dezDaysList[indexDays] === 25) {

      addDays.className += ' friday';

    }

    docDays.appendChild(addDays);

  }

  makeHoliday('Feriados');