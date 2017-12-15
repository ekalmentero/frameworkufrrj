// Função para CADASTRAR
//
// Autor: Nathan Ribeiro
//
// Só basta substituir a URL pelo link serviço e alterar os atributos 
// com o mesmo nome do dado retornado pelo serviço.

$(function(){
  

  $("body").on("click", "[name=CadastrarTurma]", function(event){
      event.preventDefault();

        var parametros = {
            codigo: $("input[id=codigo-turma]").val(),
            vagas: $("input[id=numero-vagas-turma]").val(),
            disciplina: $("input[id=disciplina]").val(),
            periodo: $("input[id=periodo]").val(),
            professor: $("input[id=professor]").val()
     } 
       
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:8080/turma",
            contentType: "application/json",
            data: JSON.stringify(parametros),
            success: function (response) {
                
                alert('A turma foi cadastrada com sucesso');
            },
            error: function () {
                alert("error");
            }
        });

});
    
});

 function getDisciplina(){
        $.ajax({            
            type: 'GET',
             url: 'http://127.0.0.1:8080/disciplinas',
            dataType: 'json',
            success: function(data){
                
            var toAppend = '';
           
            $.each(data,function(i,o){

               var item = "<option ";
                
                item += 'value="'+o.id+'">';
                item += o.nome;
                                
                item += "</option>";
                
                toAppend += item;
            });
                        
            $('#disciplina').append(toAppend);  
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados: Disciplina");
            }
        });       
 }

function getProfessor(){
     //implementar       
}

function getPeriodo(){
    
    
        $.ajax({            
            url: 'http://127.0.0.1:8080/periodo',
            dataType: 'json',            
            success: function(data){
                
            var toAppend = '';
           
            $.each(data,function(i,o){

                var item = "<option ";
                
                item += 'value="'+o.id+'">';
                item += o.nome;
                                
                item += "</option>";
                
                toAppend += item;
            });
                        
            $('#periodo').append(toAppend);  
                    
            }
        });
}