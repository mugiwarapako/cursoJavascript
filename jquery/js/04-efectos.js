'use strict';

$(document).ready(function(){
    
    var caja = $("#caja");
    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.show('slow', function(){
            console.log("Se mostro");
        }); //show(como si mostrara barriendo el objeto) fadeIn(fundido) fadeTo(velocidad, opacidad)
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.hide('fast');//hide(como si recogiera el objeto) fadeOut(fundido)
    });


    $('#todoenuno').click(function(){
        caja.slideToggle('fast');//fadeToggle como el fade de arriba 
        // toggle como el primer efecto y el slideToggle como si fuera perciana
    });


    $("#animar").click(function(){
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '110px'
                    },
            'slow')
            .animate({
                        borderRadius: '900px',
                        marginTop: '80px'
            },'slow')
            .animate({
                        borderRadius: '0px',
                        marginLeft: '0px'
            }, 'slow')
            .animate({
                        borderRadius: '0px',
                        marginTop: '0px'
            },'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            },'slow');
    });

});
