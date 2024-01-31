var letras = document.querySelectorAll('.letras');
var letra = document.querySelectorAll('.letra');


const frutas = ["BANANA", "UVA", "PITANGA", "MELANCIA", "LARANJA"];
const palavraSecreta =
  frutas[Math.floor(Math.random() * frutas.length)];
const letrasErradas = [];
const letrasCorretas = [];

letra.forEach((letra) => {
    letra.addEventListener('click', (event) => {
        const letraClicada = event.target.textContent;
        
        if (letrasErradas.includes(letraClicada) || letrasCorretas.includes(letraClicada)) {
            mostrarAvisoLetraRepetida();
        } else {
            if (palavraSecreta.includes(letraClicada)) {
                letrasCorretas.push(letraClicada);
                letra.classList.add('certo');
            } else {
                letrasErradas.push(letraClicada);
                letra.classList.add('errado');
            }
        }
        
        atualizarJogo();
    });
});

function atualizarJogo(){
    mostrarLetrasCertas();
    desenharForca();
    checarJogo();
}
function mostrarLetrasCertas(){
const containerPalavraSecreta = document.querySelector(".palavra-secreta-container");
containerPalavraSecreta.innerHTML = "";
palavraSecreta.split("").forEach((letraClicada) => {
  if (letrasCorretas.includes(letraClicada)) {
    containerPalavraSecreta.innerHTML += ` ${letraClicada} `;
  } else {
    containerPalavraSecreta.innerHTML += ` _ `;
  }
});
}
function checarJogo() {
    let mensagem = "";
    const containerPalavraSecreta = document.querySelector(".palavra-secreta-container");
    const partesCorpo = document.querySelectorAll(".forca-parte");
  
    if (letrasErradas.length === partesCorpo.length) {
      mensagem = "Fim de jogo! Você perdeu!";
    }
    if (palavraSecreta.split("").every(letra => letrasCorretas.includes(letra))) {
    //if (palavraSecreta === containerPalavraSecreta.innerText) {
      mensagem = "Parabéns! Você ganhou!";
    }
  
    if (mensagem) {
      document.querySelector("#mensagem").innerHTML = mensagem;
      document.querySelector(".popup-container").style.display = "flex";
    }
  }
  

function desenharForca() {
    const partesCorpo = document.querySelectorAll(".forca-parte");
    for (let i = 0; i < letrasErradas.length; i++) {
      partesCorpo[i].style.display = "block";
    }
  }

function mostrarAvisoLetraRepetida(){
    alert("Você já usou essa letra");
}
function reiniciarJogo() {
    window.location.reload();
  }
  













