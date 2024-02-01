


//expandir menu
var btnExp = document.querySelector('#btn-exp');
var menuLateral = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function () {
    //ao apertar p botão se existir a classe expandir- remove, se n existir -adiciona
    menuLateral.classList.toggle('expandir')
    //menuLateral.forEach(x => x.classList.toggle('expandir'))
})