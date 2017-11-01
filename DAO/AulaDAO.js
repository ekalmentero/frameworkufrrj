"use strict";

import BD from '../BD.js';
import Aula from '../modelos/Aula.js';

class AulaDAO {
  
    constructor(){
        //
    }

    static async insert(aula){
        
        /** Não consigo lançar excessão de dentro de uma Promise
            Como proceder? :)
        */
        var id = await BD.inserir(aula).catch((e)=>{
            console.log(e);
        });
        
        aula.setId(id);
        return aula;
    }
    
    static async select(aula){
        var aula_raw = await BD.buscar(aula)[0],
            aula_return = new Aula();
        
        aula_return.setId(aula_raw.id);
        aula_return.setData(aula_raw.data);
        aula_return.setTurma(aula_raw.turma);

        return aula_return;
    }


    static async update(aula){
        return await BD.update(aula);
    }

   
    static async delete(aula){
        return await BD.deletar(aula);
    }

}

module.exports = AulaDAO;