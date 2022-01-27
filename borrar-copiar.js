// BORRAR EL TEXTO QUE EL USUARIO INGRESA COMO MENSAJE 

var botonBorrarEntrada = document.querySelector("#btn-borrar-entrada");
botonBorrarEntrada.addEventListener("click", function(evento){
    evento.preventDefault();
    entradaTexto.value = "";
    entradaTexto.focus();
})

// BORRAR EL CAMPO DE SALIDA 

var botonBorrarSalida = document.querySelector("#btn-borrar-salida");
botonBorrarSalida.addEventListener("click", function(evento){
    evento.preventDefault();
    salidaTexto.value = "";
})

// COPIAR EL TEXTO ENCRIPTADO-DESENCRIPTADO

var botonCopiar = document.querySelector("#btn-copiar");
botonCopiar.addEventListener("click", function(evento){
    evento.preventDefault();
    navigator.clipboard.writeText(salidaTexto.value);
    alert("Mensaje de salida copiado");
    entradaTexto.value = "";
    entradaTexto.focus();
})