//Crie seu código abaixo dessa linha:

const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");
const caixaTexto = document.querySelector(".caixa-texto");
const botao1 = document.querySelector(".botao1");
const botao2 = document.querySelector(".botao2");

function changeColor1 () {
  caixaUm.style.background = "green";
}

function changeColor2 () {
  caixaDois.style.background = "green";
}

function pressButton1() {
  if (caixaTexto.value != '') {
    caixaUm.innerText = caixaTexto.value;
  }
  
}

function pressButton2() {
  if (caixaTexto.value != '') {
    caixaDois.innerText = caixaTexto.value;
  }
  
}

function pasteTrybe () {
 // if (caixaTexto.value == "Go Trybe!") {
    alert ("Go  Go Trybe!");
 // }
}

caixaUm.addEventListener("mouseover", changeColor1);

caixaDois.addEventListener("mouseover", changeColor2);

botao1.addEventListener("click", pressButton1);

botao2.addEventListener("click", pressButton2);

caixaTexto.addEventListener("paste", pasteTrybe);