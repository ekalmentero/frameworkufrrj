// Função para listar os dados
//
// Autor: Nathan Ribeiro
//
// No exemplo, está utilizando um array de teste.
// Só basta substituir pelo serviço e alterar os atributos com o
// mesmo nome do dado retornado pelo serviço.

$(function(){
  
  $("body").on("click", "[name=buscarTurma]", function(event){
      event.preventDefault();
        $('#resultadosTurma').empty();
        var termo = $("input[id=txt-termo]").val();
      
        $.ajax({            
            url: 'http://127.0.0.1:8080/turma',
            dataType: 'json',            
            success: function(data){
                
            var toAppend = '';
           
            $.each(data,function(i,o){

                var item = "<tr>";
                
                item += '<td>'+o.id+'</td>';
                item += '<td>'+o.codigo+'</td>';
                item += '<td>'+o.periodo+'</td>';
                item += '<td>'+o.disciplina+'</td>';
                console.log("Período listado: "+ o.nome);
                
                item += '<td><i class="fa fa-eye fa-lg icon-list" data-toggle="modal" data-target="#exampleModal" aria-hidden="true" id="exibirPeriodo'+o.id+'"></td>';
                
                item += "</tr>";
                
                toAppend += item;
            });
                        
            $('#resultadosTurma').append(toAppend);  
                    
            },
            error: function () {
                alert("Erro ao resgatar os dados.");
            }
        });


});

});