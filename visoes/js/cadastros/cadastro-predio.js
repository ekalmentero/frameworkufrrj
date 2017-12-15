$(function(){
  
  $("body").on("click", "#InstAddSala", function(event){
    event.preventDefault();

    var input = $('#nome_sala').clone();
    var sala_id = $('button[name=nome_sala]').length;
    var input_div = $("<div style='padding:0; margin-top:10px'><div class='form-group col-lg-10' style='padding:0'></div></div>");

    input.attr('sala-id', sala_id);
    input.attr('name',  "nome_sala");

    var removebtn = $('<div class="col-lg-2"><button sala-id="'+sala_id+'" type="button" class="btn add-predio add"><i class="fa fa-minus" aria-hidden="true"></i></button></div>');
    
    removebtn.on("click", function(event){
      event.preventDefault();
      $(this).parent().remove();
    });

    input_div.find(".form-group").append(input);
    input_div.append(removebtn);

    $("#salas_container").append(input_div);
    
  });


  $("body").on("click", "[name=CadastrarPredio]", function(event){
    event.preventDefault();


    var parametros = {
      nome : $("input[name=PredioNome]").val(),
      sigla : $("input[name=PredioSigla]").val(),
      lat : $("input[name=PredioLat]").val(),
      long : $("input[name=PredioLong]").val(),
      salas : $("input[name=nome_sala]").map(function(i, sala){
        return $(sala).val();
      })  
    }

    
    $.ajax({

      method: "POST",
      url: "http://127.0.0.1:8080/predios",
      data: parametros
            /*headers : {
              "Access-Control-Allow-Headers": "*"
            }*/
          }).done(function(res){
           console.log(res);
         })


        });


});