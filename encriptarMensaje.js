/* ENCRIPTAR MENSAJE INTRODUCIDO POR EL USUARIO
    Reglas de encriptación: 
        "e" es convertido para "enter" 
        "i" es convertido para "imes"
        "a" es convertido para "ai"
        "o" es convertido para "ober"
        "u" es convertido para "ufat"
*/

var botonEncriptar = document.querySelector("#btn-encriptar");
var salidaTexto = document.querySelector("#texto-copiado");
var mensajeEncriptado = "";

botonEncriptar.addEventListener("click", function(evento) {
    evento.preventDefault();
    mensajeEncriptado = "";
    if (mensaje.length == 0) {
        alert("¡Debe ingresar un mensaje para encriptar/desencriptar!");
        entradaTexto.focus();
    } else {
        if (mensajeValidado == true && mensaje.length > 0) {
            var j = 0;
            while (j < mensaje.length) {
                mensajeEncriptado = mensajeEncriptado.concat(encriptarCaracter(mensaje[j]));
                j++;
            }
            salidaTexto.value = mensajeEncriptado;
            entradaTexto.focus();
        } else {
            alert("Hay caracteres no permitidos en su texto de entrada");
            entradaTexto.focus();
        }
    }   
})

function encriptarCaracter(x) {
    switch (x) {
        case "a":
            return "ai";
            break;
        case "e":
            return "enter";
            break;
        case "i":
            return "imes";
            break;
        case "o":
            return "ober";
            break;
        case "u":
            return "ufat";
            break;
        default:
            return x;
            break;
    }
}