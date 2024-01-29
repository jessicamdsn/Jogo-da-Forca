var menuItem = document.querySelectorAll('.item-menu');

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo') //remove classlist do q n clicou
    )
    this.classList.add('ativo')  // add classlist do clicado
}

menuItem.forEach((item)=>
item.addEventListener('click',selectLink)
)

//expandir menu
var btnExp = document.querySelector('#btn-exp');
var menuLateral = document.querySelector('.menu-lateral');

btnExp.addEventListener('click',function(){
    //ao apertar p botão se existir a classe expandir- remove, se n existir -adiciona
    menuLateral.classList.toggle('expandir')
    //menuLateral.forEach(x => x.classList.toggle('expandir'))
})