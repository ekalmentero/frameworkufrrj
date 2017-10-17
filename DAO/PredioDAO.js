"use strict";

import BD from '../BD.js';
import Predio from '../modelos/Predio.js';

export class PredioDAO {
  
    constructor(){
        
    }

    insert(predio){
        try {
            
            BD.inserir(predio).then((retorno)=>{});
            return "Predio inserida!";
        
        } catch (error) {
            return error.message;
        }

    }
    

    select(predio_id){
        try {
            
            var predio = new Predio();
            predio.setID(predio_id);

            BD.buscar(predio).then((retorno)=>{
                predio.setInstitutos(retorno.institutos);
                predio.setId(retorno.id);
                predio.setSigla(retorno.sigla);
                predio.setLat(retorno.lat);
                predio.setLong(retorno.long);
                predio.setDeleted(retorno.deleted);
            });
           

            return Predio;

        } catch (error) {
            return error.message;
        }
    }
   
    update(predio){
        try {
            
            BD.update(predio).then((retorno)=>{});
            return "Predio atualizada!";

        } catch (error) {
            return error.message;
        }

    }
   
    delete(predio){
        try {
            
            BD.deletar(predio).then((retorno)=>{});
            return "Predio deletada!";
      
        } catch (error) {
            return error.message;
        }
    }

}