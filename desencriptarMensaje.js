// DESENCRIPTAR MENSAJE INTRODUCIDO POR EL USUARIO
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var expresionesAi = new RegExp("ai","g");
var expresionesEnter = new RegExp("enter","g");
var expresionesImes = new RegExp("imes", "g");
var expresionesOber = new RegExp("ober", "g");
var expresionesUfat = new RegExp("ufat", "g");

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click", function(evento) {
    evento.preventDefault();
    console.log(mensaje);
    var mensajeDesencriptado = desencriptarAi(mensaje);
    mensajeDesencriptado = desencriptarEnter(mensajeDesencriptado);
    mensajeDesencriptado = desencriptarImes(mensajeDesencriptado);
    mensajeDesencriptado = desencriptarOber(mensajeDesencriptado);
    mensajeDesencriptado = desencriptarUfat(mensajeDesencriptado);
    salidaTexto.value = mensajeDesencriptado;

})

    
function desencriptarAi(msj) {
        var msjSalida = msj.replace(expresionesAi, "a");
        return msjSalida;
}

function desencriptarEnter(msj) {
        var msjSalida = msj.replace(expresionesEnter, "e");
        return msjSalida;
}

function desencriptarImes(msj) {
        var msjSalida = msj.replace(expresionesImes, "i");
        return msjSalida;
}

function desencriptarOber(msj) {
        var msjSalida = msj.replace(expresionesOber, "o");
        return msjSalida;
}

function desencriptarUfat(msj) {
        var msjSalida = msj.replace(expresionesUfat, "u");
        return msjSalida;
}