// Função para CADASTRAR
//
// Autor: Nathan Ribeiro
//
// Só basta substituir a URL pelo link serviço e alterar os atributos 
// com o mesmo nome do dado retornado pelo serviço.

$(function(){
  

  $("body").on("click", "[name=CadastrarDisciplina]", function(event){
      event.preventDefault();

        var parametros = {
            nome : $("input[id=nome-disciplina]").val(),
            codigo : $("input[id=codigo-disciplina]").val(),
            creditos : $("input[id=numero-creditos]").val(),
            livre_escolha: 1,
            departamento: 2,
            deleted: 0
     } 
       
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:8080/disciplinas",
            contentType: "application/json",
            data: JSON.stringify(parametros),
            success: function (response) {
                
                alert('A disciplina foi cadastrada com sucesso');
            },
            error: function () {
                alert("error");
            }
        });

});
    
});