$(function(){

  $("body").on("click", "[name=CadastrarDepartamento]", function(event){
    event.preventDefault();

    var parametros = {
      nome_departamento : $("input[name=DepNome]").val(),
      sigla_departamento : $("input[name=DepSigla]").val(),
      instituto: $("select[name=DepSelectInst]").val()
    }


    $.ajax({

      method: "POST",
      url: "http://127.0.0.1:8080/departamento",
      data: parametros
            /*headers : {
              "Access-Control-Allow-Headers": "*"
            }*/
          }).done(function(res){
           console.log(res);
         })


        });


  $("select[name=DepSelectInst]").select2();

});
