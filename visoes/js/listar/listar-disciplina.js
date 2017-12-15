// Função para listar os dados
//
// Autor: Nathan Ribeiro
//
// No exemplo, está utilizando um array de teste.
// Só basta substituir pelo serviço e alterar os atributos com o
// mesmo nome do dado retornado pelo serviço.

$(function(){
  
  $("body").on("click", "[name=buscarDisciplina]", function(event){
      event.preventDefault();
      
        $('#resultadosDisciplina').empty();
            
        var termo = $("input[id=txt-termo]").val();
      
        $.ajax({            
            type: 'GET',
             url: 'http://127.0.0.1:8080/disciplinas',
            dataType: 'json',      
            //PARA BUSCAR, BASTA DESCOMENTAR A PROXIMA LINHA E PASSAR O PARAMETRO
            // data: { *parametro do serviço*: termo},
            success: function(data){
                
            var toAppend = '';
           
            //CRIA CADA ROW NA TABELA PARA CADA RESULTADO
            $.each(data,function(i,o){

                var item = "<tr>";
                
                // ITERAR PARA CADA COLUNA DOS RESULTADOS.
                // MUDAR O NOME DA COLUNA DE AOCRDO COM O ARRAY DE RETORNO DO SERVIÇO
                item += '<td>'+o.id+'</td>';
                item += '<td>'+o.codigo+'</td>';
                item += '<td>'+o.nome+'</td>';
                item += '<td>'+o.creditos+'</td>';
                console.log(item);
                
                //Insere a opção de ação, alterando o id do botão para respectivo id do item.
                
                item += '<td><i class="fa fa-eye fa-lg icon-list" data-toggle="modal" data-target="#exampleModal" aria-hidden="true" id="exibirDisciplina'+o.id+'"></td>';
                
                item += "</tr>";
                
                toAppend += item;
            });
                        
            // JOGA RESULTADO BUSCADO NA TABELA.
            $('#resultadosDisciplina').append(toAppend);  
                    
            },
            error: function () {
                alert("Erro ao resgatar os dados.");
            }
        });


});

});