const boton = document.getElementById(`boton-color`);
const texto = document.getElementById(`color`);
console.log(boton);
console.log(texto);

function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random()*16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex

}
console.log(generarColorHexAleatorio());

boton.addEventListener('click', function(){
    let coloraleatorio = generarColorHexAleatorio();
    texto.textContent = coloraleatorio;
    document.body.style.backgroundColor = coloraleatorio;
})