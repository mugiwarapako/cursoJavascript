'use strict';


window.addEventListener('load' , () => {
    console.log("DOM cargado");

    var fomulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', () => {
        console.log("Se dio enviar");

        let nombre = document.querySelector("#nombre").value;
        let apellidos = document.querySelector("#apellidos").value;
        let edad = document.querySelector("#edad").value;

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");
       
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
        
    });
});