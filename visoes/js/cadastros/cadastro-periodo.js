// Função para CADASTRAR
//
// Autor: Nathan Ribeiro
//
// Só basta substituir a URL pelo link serviço e alterar os atributos 
// com o mesmo nome do dado retornado pelo serviço.

$(function(){
  

  $("body").on("click", "[name=CadastrarPeriodo]", function(event){
      
      event.preventDefault();

     var parametros = {
         data_inicio : $("input[id=periodo-data-i]").val(),
         data_fim : $("input[id=periodo-data-f]").val(), 
         nome : $("input[id=nome-periodo]").val()
     }     
     
      
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/periodo',
            contentType: "application/json",
            data: JSON.stringify(parametros),
            success: function (response) {
                alert("Período cadastrado com sucesso!");            
            },
            error: function () {
                alert("Erro no cadastro.");
            }
        });
  });
});