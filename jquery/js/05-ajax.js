'use strict';

$(document).ready(function(){

    var datos = $("#datos");

    //Load

    //datos.load("https://reqres.in/");

    //get y post

    $.get("https://reqres.in/api/users",{page: 3}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" +element.first_name + " " + element.last_name +  "</p>");
        });
    });

   

    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
            nombre: $('input[name=name]').val(),
            web: $('input[name=web]').val()
        }
    
        /*$.post($(this).attr('action'), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("usuario añadido correctamente");
        });
*/

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            //dataType: 'json',
            //contentType: 'application/json'
            data: usuario,
            beforeSend: function(){
                console.log("Enviando ...");
            },
            success: function(response){
                console.log(response);
                $("#datos").append("<p>" +response.nombre + " " + response.web +  "</p>");
            },
            error: function(){
                console.log("Error");
            },
            timeout:1000
        });
        return false;

    });

    
});