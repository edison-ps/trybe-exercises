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

  function makeHoliday (holidayString) {

    let docButtons = document.querySelector('.buttons-container');
    let holidayButton = document.createElement('button');
    holidayButton.innerText = holidayString;
    holidayButton.id = 'btn-holiday';
    docButtons.appendChild(holidayButton);

  }

  function makeFriday (fridayString) {

    let docButtons = document.querySelector('.buttons-container');
    let fridayButton = document.createElement('button');
    fridayButton.innerText = fridayString;
    fridayButton.id = 'btn-friday';
    docButtons.appendChild(fridayButton);

  }
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let docDays = document.querySelector('#days');

  for (let indexDays = 0; indexDays < dezDaysList.length; indexDays += 1) {

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
  const btnHoliday = document.querySelector('#btn-holiday');
  let displayHoliday = false;

  btnHoliday.addEventListener('click', function () {
      const holidayBackground = document.querySelectorAll('.holiday');

      for (let index = 0; index < holidayBackground.length; index += 1) {

        if (displayHoliday) {
          holidayBackground[index].style.backgroundColor = 'rgb(238, 238, 238)';
        }
        else {
          holidayBackground[index].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }

    if (displayHoliday) {
      displayHoliday  = false;
    }
    else {
      displayHoliday  = true;
    }

  });

  makeFriday('Sexta-feira');
  const btnFriday = document.querySelector('#btn-friday');
  let displayFriday = false;
  let listaFriday = [];

  btnFriday.addEventListener('click', function () {
      const fridayText = document.querySelectorAll('.friday');

      for (let index = 0; index < fridayText.length; index += 1) {

        if (displayFriday) {
          fridayText[index].innerText = listaFriday[index];
        }
        else {
          listaFriday[index] = fridayText[index].innerText;
          fridayText[index].innerText = 'SEXTOU !!';
        }
    }

    if (displayFriday) {
      displayFriday  = false;
    }
    else {
      displayFriday  = true;
    }
  });

const zoomInOut = document.querySelector('#days');
zoomInOut.addEventListener('mouseover', function (eventDay) {
  eventDay.target.style.fontSize = '40px'
    
});

//const zoomOut = document.querySelector('#days');
zoomInOut.addEventListener('mouseout', function (eventDay) {
  eventDay.target.style.fontSize = '20px'
    
});