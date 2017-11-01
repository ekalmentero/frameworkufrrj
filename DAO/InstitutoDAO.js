"use strict";

import BD from '../BD.js';
import Instituto from '../modelos/Instituto.js';

export default class InstitutoDao {
   constructor(){

   }

   static async insert(instituto){
       var id = await BD.inserir(instituto).catch(()=>{
          console.log(e);
       });
       instituto.setId(id);
       return instituro;
   }
   
   static async select(instituto){
      var inst_return = new Instituto(),
          inst_raw = await BD.buscar(instituto)[0];
           
      inst_return.setId(inst_raw.id);
      inst_return.setNome(inst_raw.nome);
      inst_return.setSigla(inst_raw.sigla);
      inst_return.setId(inst_raw.id);
      inst_return.setDeleted(inst_raw.deleted);
               
      return inst_return;
   }


   static async update(instituto){
      return await BD.update(instituto);
   }


   static async delete(instituto){ 
      return await BD.deletar(instituto);
   }
}