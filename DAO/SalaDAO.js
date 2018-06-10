"use strict";

import BD from '../BD.js';
import Sala from '../model/Sala.js';
import Predio from '../model/Predio.js';

export default class SalaDao{
  

   constructor(){

   }


   static async insert(sala, id_predio){

    try{
      /*
        var sal_id = await BD.inserir(sala).catch((e)=>{
            console.log(e);
        });
        */

        var foreignKeys=[];
        foreignKeys.push(['predio',id_predio]);
        var retorno = await BD.inserir(sala, foreignKeys);
        sala.setId(retorno);
        return sala;
        
      } catch (error) {
        return error.message;
      }
   }

  
   static async select(sala){ 
      var sal_return = new Sala(),
          sal_raw = await BD.buscar(sala)[0],
          predio = new Predio(),
          pre_raw = await BD.buscar(sal_raw.predio)[0];
        
          sal_return.setId(id);
          sal_return.setNome(sal_raw.nome);
          sal_return.setId(sal_raw.id);
          sal_return.setDeleted(sal_raw.deleted);
          
          predio.setId (pre_raw.id);
          predio.setNome (pre_raw.nome);
          predio.setSigla (pre_raw.sigla);
          predio.setLat (pre_raw.lat);
          predio.setLong (pre_raw.long);
          predio.setDeleted (pre_raw.deleted);
          predio.setInstitutos (pre_raw.institutos);

          sal_return.setPredio(predio);

          return sal_return;
   }
   

   static async update(sala){
      return await BD.update(sala);
   }
   

   static async delete(sala){ 
      return await BD.deletar(sala);
   }
}