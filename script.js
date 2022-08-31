let textoEncriptado = "";
let textoDesencriptado = "";
const letraNormal = ["a", "e", "i", "o", "u"];
const letraEncrip = ["ai", "enter", "imes", "ober", "ufat"];

let inputtext = document.querySelector("#input-texto");
let mensaje = document.querySelector("#mensaje");
let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");


const letrasOk = new RegExp("^[a-z]+$", "i");
const espacio = new RegExp(/ /, "g");


function limpiarTexto(cajaTexto) {
    cajaTexto.value = "";
}

function encriptador() {
    if (inputtext.value == "") {

    } else {
        limpiarTexto(mensaje);
        mostrarElementos("copiar");
        mostrarElementos("mensaje");
        ocultarElementos("frase1");
        ocultarElementos("frase2");
        let contador = 1;
        let caracterEncriptado = "";
        let frase = inputtext.value;
        let largoFrase = frase.length;
        let caracter = "";
        textoEncriptado = "";


        while (contador <= largoFrase) {
            caracter = frase.charAt(contador - 1);
            let igual = true;
            for (let posicion = 0; posicion < letraNormal.length; posicion++) {
                if (caracter == letraNormal[posicion]) {
                    caracterEncriptado = letraEncrip[posicion];
                    igual = true;
                    break;
                } else {
                    igual = false;
                }
            }
            if (igual == false) {
                caracterEncriptado = caracter;
            }
            textoEncriptado = textoEncriptado + caracterEncriptado;
            mensaje.value = textoEncriptado;
            contador++;
        }
        mensaje.style.background = "#F6F2F6";
    }

}


function desencriptador() {

    if (inputtext.value == "") {

    } else {

        limpiarTexto(mensaje);
        mostrarElementos("copiar");
        mostrarElementos("mensaje");
        ocultarElementos("frase1");
        ocultarElementos("frase2");


        let contador = 0;
        let frase = inputtext.value;
        while (contador < letraEncrip.length) {
            textoDesencriptado = frase.replace(new RegExp(letraEncrip[contador], "g"), letraNormal[contador]);
            frase = textoDesencriptado;
            mensaje.value = textoDesencriptado;
            contador++;
        }
        mensaje.style.background = "#F6F2F6";
    }

}


function validarTexto(evento) {
    if ((!espacio.test(evento.key)) && (!letrasOk.test(evento.key))) {
        evento.preventDefault();
    }
}


function copiarTexto() {
    let content = document.getElementById("mensaje");
    content.select();
    document.execCommand("copy");
    limpiarTexto(inputtext);
    document.getElementById("frase1").focus();
}

function ocultarElementos(idElemento) {
    document.getElementById(idElemento).style.visibility = "hidden";
}

function mostrarElementos(idElemento) {
    document.getElementById(idElemento).style.visibility = "visible";
}


ocultarElementos("copiar");
inputtext.onkeypress = validarTexto;
desencriptar.onclick = desencriptador;
encriptar.onclick = encriptador;
copiar.onclick = copiarTexto;