$(function(){
  
  $("body").on("click", "[name=CadastrarInstituto]", function(event){
    event.preventDefault();


    var parametros = {
      nome : $("input[name=InstNome]").val(),
      sigla : $("input[name=InstSigla]").val(),
      predios : $("select[name=InstSelectPredio]").val(),
      departamentos : $("select[name=InstSelectDep]").val()
    }

    $.ajax({

      method: "POST",
      url: "http://127.0.0.1:8080/instituto",
      contentType: "application/json",
      data: JSON.stringify(parametros)

    }).done(function(res){
     console.log(res);
   })
  });


  $("select[name=InstSelectPredio]").select2({
    ajax: {
      url : "http://127.0.0.1:8080/predio/search",
      dataType : "json",
      data : function(params){
        return {
          nome : params.term,
          sigla : params.term
        };
      },
      processResults : function(predios){
        return {
          results : predios.map( function(p){
            return {id : p.id, text : p.nome.concat(" (",p.sigla,")")};
          })
        };
      }
    }
  });
  
  $("select[name=InstSelectDep]").select2({
    ajax: {
      url : "http://127.0.0.1:8080/departamento/search",
      dataType : "json",
      data : function(params){
        return {
          nome : params.term,
          sigla : params.term
        };
      },
      processResults : function(departamentos){
        return {
          results : departamentos.map( function(p){
            return {id : p.id, text : p.nome.concat(" (",p.sigla,")")};
          })
        };
      }
    }
  });

});