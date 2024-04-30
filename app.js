//input range of each color
const inputRojo = document.querySelector('#rojo')
const inputAzul = document.querySelector('#azul')
const inputVerde = document.querySelector('#verde')

//text of each color
const textoRojo = document.querySelector('#texto-rojo')
const textoAzul = document.querySelector('#texto-azul')
const textoVerde = document.querySelector('#texto-verde')

//value of each input
let rojo = inputRojo.value
let azul = inputAzul.value
let verde = inputVerde.value

//updating the text of each color
textoRojo.innerText = rojo
textoAzul.innerText = azul
textoVerde.innerText = verde

//function that updates the backgorund
function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB
}

//listener for red input
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value
    textoRojo.innerText = rojo

    actualizarColor(rojo, verde, azul)
})

//listener for green input
inputVerde.addEventListener('change', (e) => {
    verde= e.target.value
    textoVerde.innerText= verde

    actualizarColor(rojo, verde, azul)
})

//listener for blue
inputAzul.addEventListener('change', (e) => {
    azul= e.target.value
    textoAzul.innerText= azul

    actualizarColor(rojo, verde, azul)
})
