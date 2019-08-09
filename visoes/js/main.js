
function abrirSala(){

        var strCount =  $('#countSala').val();
        var count = parseInt(strCount);

        console.log( $('[id^=nome-sala]:last') );
        $('#nome-sala')
              .clone()
              .attr('id', 'nome-sala'+(count++))
              .val('')
              .insertAfter($('[id^=nome-sala]:last'));

        $('#countSala').val(count);
        console.log("Sala adicionada com ID: nome-sala"+count);
        return true;
}




    function removeSala(){

        var strCount =  $('#countSala').val();
        var count = parseInt(strCount);

        if (count > 1){
                 $('#nome-sala' + count).remove();
            console.log("Sala removida com ID: nome-sala"+count);

                 $('#countSala').val(--count);
            }

}

$(document).ready(function(e){
   $("#buscar-button").click(function(){
     $("#buscar-button").addClass("active");
     $("#cadastrar-button").removeClass("active");
     $("#editar-button").removeClass("active");
       $("#config-button").removeClass("active");
    });
});

$(document).ready(function(e){
   $("#cadastrar-button").click(function(){
       $("#cadastrar-button").addClass("active");
       $("#buscar-button").removeClass("active");
         $("#editar-button").removeClass("active");
         $("#config-button").removeClass("active");
    });
});

$(document).ready(function(e){
   $("#editar-button").click(function(){
       $("#editar-button").addClass("active");
       $("#buscar-button").removeClass("active");
         $("#cadastrar-button").removeClass("active");
         $("#config-button").removeClass("active");
    });
});

$(document).ready(function(e){
   $("#config-button").click(function(){
       $("#config-button").addClass("active");
       $("#buscar-button").removeClass("active");
         $("#cadastrar-button").removeClass("active");
         $("#editar-button").removeClass("active");
    });
});
