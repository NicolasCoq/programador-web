const titulo = document.querySelector('h1')

// console.log(titulo)

titulo.style.color = 'red'

// background-color >> backgroundColor

titulo.classList.add('fondo')

const boton = document.getElementById('boton')

const texto = document.getElementById('texto')

console.log(boton,texto)

boton.addEventListener('click',() =>{
    texto.classList.toggle('invisible')
})


const aclaracion = document.getElementById('aclaracion')

console.log(aclaracion)

// aclaracion.innerHTML = '<h1>hola soy un texto</h1>'

aclaracion.innerText = 'hola soy un texto'