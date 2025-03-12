const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
    if (inputAmigo.value == " "){
        alert ("Debes escribir un nombre");
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}<li>`;
    
    limpiarCaja();

};

function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = " ";
}



function sortearAmigo(){
 const random = Math.floor(Math.random() * listaAmigos.length);
 const amigoSecreto = listaAmigos[random];
 ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}<li>`;

    }

