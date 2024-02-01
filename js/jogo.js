var letras = document.querySelector('.letras');
var letra = document.querySelectorAll('.letra');
var aviso = document.querySelector('.aviso')

var menuItem = document.querySelectorAll('.item-menu');
var tema = document.getElementById('tema');
var thisElement;
var temaSelecionado;
var palavraSecreta = "";

const frutas = ["BANANA", "UVA", "PITANGA", "MELANCIA", "LARANJA"];
const aleatorio = ["BOLA", "RESTAURANTE", "PETECA", "PAMONHA", "CINEMA"];
const paises = ["BRASIL", "URUGUAI", "MEXICO", "PORTUGAL", "CHINA"];
const adjetivos = ["BONITO", "ALTO", "CRIATIVO", "CARINHOSO", "TIMIDO"];
const animais = ["GATO", "CACHORRO", "COELHO", "CAVALO", "FUINHA"];
const profissoes = ["MEDICO", "ENGENHEIRO", "MOTORISTA", "PROGRAMADOR", "VENDEDOR"];
const letrasErradas = [];
const letrasCorretas = [];


function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo'))
    this.classList.add('ativo'); 
    aviso.textContent ='Digite uma letra para iniciar';
    tema.textContent = 'Tema: ' + this.innerText;
    thisElement=this; 
    
    if (letrasCorretas.length > 0 || letrasErradas.length > 0) {
        // Se já foram digitadas letras, reinicia o jogo
        reiniciarJogoExecutado();
    } else {
        // Se não, apenas atualiza os itens do jogo
        aparecerItensJogo();
    }
    

    switch (thisElement.innerText) {
        case 'Aleatorio':
            temaSelecionado = aleatorio;
            break;
        case 'Frutas':
            temaSelecionado = frutas;
            break;
        case 'Paises':
            temaSelecionado = paises;
            break;
        case 'Adjetivos':
            temaSelecionado = adjetivos;
            break;
        case 'Animais':
            temaSelecionado = animais;
            break;
        case 'Profissoes':
            temaSelecionado = profissoes;
            break;
        default:
           alert('não pegou')
    }
    palavraSecreta = temaSelecionado[Math.floor(Math.random() * temaSelecionado.length)];
    
}
menuItem.forEach((item) =>
    item.addEventListener('click', selectLink))
    
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

function atualizarJogo() {
    mostrarLetrasCertas();
    desenharForca();
    checarJogo();
    apagarAviso()
    aparecerItensJogo()
}
function reiniciarJogoExecutado() {

    aviso.textContent = 'Digite uma letra para iniciar';
    tema.textContent = 'Tema: ' + thisElement.innerText;
    aparecerItensJogo();
    
    // Reiniciar arrays
    letrasErradas.length = 0;
    letrasCorretas.length = 0;

    aviso.style.display = 'block';
    document.querySelector(".palavra-secreta-container").innerHTML = "";
    
    const partesCorpo = document.querySelectorAll(".forca-parte");
    partesCorpo.forEach((parte) => {
        parte.style.display = "none";
    });
    letra.forEach((letra) => {
        letra.classList.remove('certo', 'errado');
    });
    
}
function aparecerItensJogo(){
    const linhas = document.querySelectorAll(".linha");
    linhas.forEach(linha => linha.style.display = 'block');
    letras.style.display = 'block';
}
function apagarAviso(){
    //aviso.textContent ='';
    aviso.style.display = 'none';
}
function mostrarLetrasCertas() {
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

function mostrarAvisoLetraRepetida() {
    alert("Você já usou essa letra");
}
function reiniciarJogo() {
    window.location.reload();
}














