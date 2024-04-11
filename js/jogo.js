var letras = document.querySelector('.letras');
var letra = document.querySelectorAll('.letra');
var aviso = document.querySelector('.aviso')

const divDosCards = document.querySelectorAll('.card-box');
var titulo= document.querySelector('.titulo');
var telaImagem= document.querySelector('.tela-imagem');

var cardComTemas= document.querySelector('.temas-cards');
var menuLateral = document.querySelector('.menu-lateral');
var menuItem = document.querySelectorAll('.item-menu');
var card = document.querySelectorAll('.card');
var tema = document.getElementById('tema');
var thisElement;
var temaSelecionado;
var palavraSecreta = "";

const frutas = ["BANANA", "UVA", "PITANGA", "MELANCIA", "LARANJA", "ABACAXI"];
const paises = ["BRASIL", "URUGUAI", "MEXICO", "PORTUGAL", "CHINA", "GRECIA"];
const adjetivos = ["BONITO", "ALTO", "CRIATIVO", "GENTIL", "TIMIDO", "ESPERTO"];
const animais = ["GATO", "CACHORRO", "COELHO", "CAVALO", "FUINHA", "ELEFANTE"];
const profissoes = ["MEDICO", "ENGENHEIRO", "MOTORISTA", "PROGRAMADOR", "VENDEDOR", "ENFERMEIRA"];
const letrasErradas = [];
const letrasCorretas = [];


function selectLink() {

    if (window.getComputedStyle(menuLateral).display === 'block') {
        menuItem.forEach((item) =>
        item.classList.remove('ativo'))
    this.classList.add('ativo'); 
    }

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
            selecionarTemaAleatorio();
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
    console.log('Palavra secreta:'+ palavraSecreta);
    
}

divDosCards.forEach((card) => {
    card.addEventListener('click', () => {
        const spanCard = card.querySelector('.card');
        if (spanCard) {
            spanCard.click(); // Simula o clique no span quando a div for clicada
        }
    });
});

card.forEach((item) => {
    item.addEventListener('click', selectLink);
});
    
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
    menuLateral.style.display = "block";
    cardComTemas.style.display = "none";
    telaImagem.style.display = "block";


    const larguraTela = window.innerWidth;
    // Verifica se a largura da tela é menor ou igual a 860px
    if (larguraTela <= 860) {
        titulo.style.marginBottom = '230px';
    }
   
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

    reiniciarJogoExecutado();
    document.querySelector(".popup-container").style.display = "none";
    palavraSecreta = temaSelecionado[Math.floor(Math.random() * temaSelecionado.length)];
}

 function mudarTema(){

     window.location.reload();
     //menuLateral.classList.toggle('expandir')
}

function selecionarTemaAleatorio() {

    const temasDisponiveis = [
        { nome: 'Frutas', temas: frutas },
        { nome: 'Países', temas: paises },
        { nome: 'Adjetivos', temas: adjetivos },
        { nome: 'Animais', temas: animais },
        { nome: 'Profissões', temas: profissoes }
    ];
    const temaAleatorioIndex = Math.floor(Math.random() * temasDisponiveis.length);
    temaSelecionado = temasDisponiveis[temaAleatorioIndex].temas;
    const nomeDoTemaSelecionado = temasDisponiveis[temaAleatorioIndex].nome;
    tema.textContent = 'Tema: ' + nomeDoTemaSelecionado;
}

