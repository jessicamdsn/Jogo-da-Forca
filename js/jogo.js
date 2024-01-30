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

function mostrarAvisoLetraRepetida(){
    alert("Você já usou essa letra");
}














function selectLink(){

    letra.forEach((item)=>
    item.classList.remove('ativo') 
    )
    if(palavraPossuiLetra= true){
        this.classList.add('certo') 
     //ADICIONAR LETRA NA PALAVRA
    }else{
        this.classList.add('errado')  
    
    }
    
}

menuItem.forEach((item)=>
item.addEventListener('click',selectLink)
)