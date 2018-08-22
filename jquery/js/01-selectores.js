'use strict'

$(document).ready(function(){
    //selector de ID

    $("#rojo").css("background", "red").css("color" , "white");

    $("#amarillo").css("background", "yellow").css("color" , "red");

    $("#verde").css("background", "green").css("color" , "white");


    //Selectores de clase

    var mi_clase = $(".zebra").css("padding", "5px");

    $('.sin_borde').click(function(){
        console.log("aqui");
        $(this).addClass('zebra');
    });

    //selectores de etiqueta
    var parrafos = $('p').css("cursor", 'pointer');

    parrafos.click(function(){
        
        var thisL = $(this);

        if(!thisL.hasClass('grande')){
            thisL.addClass('grande');
        }else{
            thisL.removeClass('grande');          
        }
    });


    //selectores por atributo

    $('[title ="Google"]').css('background', '#ccc');
    $('[title ="Facebook"]').css('background', 'blue');


    //Otros

    //$('p, a').addClass('margen-superior');

    //var busqueda = $('#caja').find('.resaltado');  //find buscar dentro de "caja" ejemplo

    var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title ="Google"]'); //estamos en la lista elemento 2

    console.log(busqueda.eq(0));

});