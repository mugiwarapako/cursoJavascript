'use strict';


window.addEventListener('load', () =>{

    //Timers
    //setInterval se ejecuta en un cierto tiempo siempre
    //setTimeout ejecuta en un cierto solo una ves
    //segundo parametro es el milisegundos

    function intervalo (){
        let tiempo = setInterval(function(){
            console.log("setInterval ejecutado");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        }, 500);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener('click', () =>{
        if(confirm("¿Deseas parar el interval?")){
            clearInterval(tiempo);
            console.log("Se detuvo");
        }
    });


    var start = document.querySelector("#start");

    start.addEventListener('click', () =>{
        var tiempo = intervalo();
        console.log("Se inicia");
    });


});

