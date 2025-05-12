"use strict";

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");

let boton = document.getElementById("boton");

let imprimir =document.getElementById("imprimir")
imprimir.style = "display: none;";
boton.addEventListener("click", function(){
    imprimir.innerHTML = nombre.value + " " + "correo" + " " + email.value + " " + "con numero de telefono " + telefono.value + " su mensaje " + mensaje.value + " ha sido enviado.";
    imprimir.style = "display: block; background-color: #4e8a60; color: #ffffff;" ;
    nombre.value = "";
    email.value = "";
    telefono.value = "";
    mensaje.value = "";
})
