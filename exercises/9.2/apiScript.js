
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {  
  fetch(API_URL, myObject)
    .then((response) => {
      response.json()
        .then((joke) => {
          const jokeContainer = document.querySelector('#jokeContainer');
          const jokeLine = document.createElement('p');
          jokeLine.innerText = joke.joke;
          jokeContainer.appendChild(jokeLine);
        });
    });
};

window.onload = () => fetchJoke();