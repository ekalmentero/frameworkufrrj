"use strict";

import BD from '../BD.js';
import Aula from '../modelos/Aula.js';

export class AulaDAO{
  
    constructor(){
        
    }

    insert(aula){
        try {
            
            BD.inserir(Aula).then((retorno)=>{});
            return "Aula inserida!";
        
        } catch (error) {
            return error.message;
        }

    }
    

    select(aula_id){
        try {
            
            var aula = new Aula();
            aula.setID(aula_id);

            BD.buscar(aula).then((retorno)=>{
                aula.setId(retorno.id);
                aula.setData(retorno.data);
                aula.setTurma(returno.turma);
            });

        } catch (error) {
            return error.message;
        }
    }


    update(aula){
        try {
            
            BD.update(Aula).then((retorno)=>{});
            return "Aula atualizada!";

        } catch (error) {
            return error.message;
        }

    }
   
    delete(aula){
        try {
            
            BD.deletar(Aula).then((retorno)=>{});
            return "Aula deletada!";
      
        } catch (error) {
            return error.message;
        }
    }

}