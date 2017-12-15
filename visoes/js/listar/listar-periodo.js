// Função para listar os dados
//
// Autor: Nathan Ribeiro
//
// No exemplo, está utilizando um array de teste.
// Só basta substituir pelo serviço e alterar os atributos com o
// mesmo nome do dado retornado pelo serviço.

$(function(){
  
  $("body").on("click", "[name=buscarPeriodo]", function(event){
      event.preventDefault();
        $('#resultadosPeriodo').empty();
        var termo = $("input[id=txt-termo]").val();
      
        $.ajax({            
            //type: 'GET',
            url: 'http://127.0.0.1:8080/periodo',
            dataType: 'json',            
            success: function(data){
                
            var toAppend = '';
           
            $.each(data,function(i,o){

                var item = "<tr>";
                
                item += '<td>'+o.id+'</td>';
                item += '<td>'+o.data_inicio+'</td>';
                item += '<td>'+o.data_fim+'</td>';
                item += '<td>'+o.nome+'</td>';
                console.log("Período listado: "+ o.nome);
                
                item += '<td><i class="fa fa-eye fa-lg icon-list" data-toggle="modal" data-target="#exampleModal" aria-hidden="true" id="exibirPeriodo'+o.id+'"></td>';
                
                item += "</tr>";
                
                toAppend += item;
            });
                        
            $('#resultadosPeriodo').append(toAppend);  
                    
            },
            error: function () {
                alert("Erro ao resgatar os dados.");
            }
        });


});

});