/* CAPTURAR EL TEXTO INGRESADO POR EL USUARIO Y VERIFICAR CARACTERES: 
   _ se admiten solo letras minúsculas
   _ no se permite acentuación de palabras
   _ se excluyen caracteres especiales (excepciones: la letra "ñ", el punto, la coma y el espacio) 
*/
var entradaTexto = document.querySelector("#entrada");
var mensajeInvalido = document.querySelector("#mensaje-invalido");
var expReg = new RegExp("[a-z]");
var mensaje = "";
var mensajeValidado = "";

entradaTexto.addEventListener("input", function() {
    mensaje = this.value;
    mensajeValidado = true;
    mensajeInvalido.textContent = null;
    var i = 0;
    while (i < mensaje.length && 0 < mensaje.length) {
        if (expReg.test(mensaje[i]) == false && mensaje[i] != " " && mensaje[i] != "," && mensaje[i] != "." && mensaje[i] != "ñ") {
            mensajeValidado = false;
            mensajeInvalido.textContent = "Existen caracteres inválidos en el texto de entrada";
        }
        i++;
    }
})
