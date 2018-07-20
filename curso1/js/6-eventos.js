'use strict';

/*
    Eventos del raton
*/ 

window.addEventListener('load', () => {


    function cambiarColor(){
        var bg = boton.style.background;

        if(bg == "green none repeat scroll 0% 0%"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }

        boton.style.paddind = "10px";
            boton.style.border = "1px solid #ccc";


        return  true;
    }


    //click momento de presionar el boton
    var boton = document.querySelector("#boton");

    boton.addEventListener('click',() =>{
        cambiarColor();
    });


    //mouse over en el momento de pasar con el maouse el boton
    boton.addEventListener('mouseover', () =>{
        boton.style.background = "#FFFFFF";
    });

    //Mouseout en el momento de alejar el mouse del boton
    boton.addEventListener('mouseout', () =>{
        boton.style.background = "yellow";
    });

    //Campo

    var input = document.querySelector("#campo_nombre");

    //Focus

    input.addEventListener('focus', () =>{
        console.log("Estas dentro del input");
    });


    //blur

    input.addEventListener('blur', () =>{
        console.log("Estas fuera del input");
    });

    //Keydown

    input.addEventListener('keydown', (event) =>{
        console.log("pulsar tecla ", String.fromCharCode(event.keyCode));
    });

    //Keypress
    input.addEventListener('keypress', (event) =>{
        console.log("tecla presionada ", String.fromCharCode(event.keyCode));
    });

    //Keyup
    input.addEventListener('keyup', (event) =>{
        console.log("tecla soltada ", String.fromCharCode(event.keyCode));
    });
});

