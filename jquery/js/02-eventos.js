'use strict'


$(document).ready(function(){
    
    //MouseOver y MouseOut

    var caja = $('#caja');
/*
    caja.mouseover(function(){
        console.log("aqio");
        $(this).css("background", "red");
    });

    caja.mouseout(function(){
        console.log("aqio");
        $(this).css("background", "green");
    });
*/

    function cambiaRojo(){
        $(this).css("background", "red");
    }
    function cambiaVerde(){
        $(this).css("background", "green");
    }

    //Hover mejor forma

    caja.hover(cambiaRojo, cambiaVerde);


    //click y doble click


    caja.click(function(){
        $(this).css("background", "blue")
            .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
            .css("color","yellow    ");
    });

    //focus y blur

    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        datos.text($(this).val()).show();
    });


    //Mousedown y el mouseup

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "red");
    });


    //mousemove

    $(document).mousemove(function(){
        $('body').css("cursor", "none");
        var sigueme = $("#sigueme");

        sigueme.css("left",event.clientX).css("top", event.clientY);
    });
   
});