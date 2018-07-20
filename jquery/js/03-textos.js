'use strict';

$(document).ready(function(){

    reloadLinks();

    $("#add_button")
    .removeAttr("disabled")
    .click(function(){
        $('#menu').prepend('<li><a href="' + $("#add_link").val() + '"></a></li>');
        //append despues de la lista
        //prepend antes de la lista 
        //before antes del elemento seleccionado 
        //after despues del elemento seleccionado
        $("#add_link").val('');
        reloadLinks();


    });

});

function reloadLinks(){

    $('a').each(function(indice){
        var that = $(this);
        var enlace = $(this).attr("href");

        that.attr("target","_black");
        that.text(enlace);
    });
    
}