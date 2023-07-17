const inputRojo = document.getElementById("Rojo");
const inputVerde = document.getElementById("Verde");
const inputAzul = document.getElementById("Azul");

const textoRojo = document.getElementById("texto-Rojo");
const textoVerde = document.getElementById("texto-Verde");
const textoAzul = document.getElementById("texto-Azul");

//Creo una variable que toma el valor del input//
let rojo = inputRojo.value; //tomaría el 23
let verde = inputVerde.value; //tomaría el 41
let azul = inputAzul.value; // tomatía el 56

//actualiza el texto de los párrafos y le asigno el valor del input//
textoRojo.innerText = rojo; 
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//con esta función le asigno al BG el RGB
function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Actualizador de cada input//

inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul)
})

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul)
})

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul)
})

/* también podría hacerse así 
En este caso no me refiero al evento en si sino que lo
vinculo a la varibale que tenía definida

inputAzul.addEventListener('change', () => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul)
})

*/
