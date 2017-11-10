"use strict";

import BD from '../BD.js';
import Predio from '../modelos/Predio.js';

export default class PredioDAO {
  
    constructor(){
        
    }


    static async insert(predio){ 
        var id = await BD.inserir(predio);
        predio.setId(id);
        return predio;
    }
    

    static async select(predio){
        var pre_return = new Predio();
            pre_raw = await BD.buscar(predio)[0];

        pre_return.setInstitutos(pre_raw.institutos);
        pre_return.setNome(pre_raw.nome);
        pre_return.setId(pre_raw.id);
        pre_return.setSigla(pre_raw.sigla);
        pre_return.setLat(pre_raw.lat);
        pre_return.setLong(pre_raw.long);
        pre_return.setDeleted(pre_raw.deleted);
           
        return pre_return;
    }
   
    static async update(predio){
        return await BD.update(predio);
    }
   
    static async delete(predio){
        return await BD.deletar(predio);
    }

}