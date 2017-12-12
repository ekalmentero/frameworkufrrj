"use strict";

import BD from '../BD.js';
import Sala from '../modelos/Sala.js';
import Predio from '../modelos/Predio.js';

export default class SalaDao{
  

   constructor(){

   }

   static async insert(sala){
      let query = "INSERT INTO sala (nome, predio, deleted) VALUES "+
                    "('"+sala.getNome()+"', "+
                    sala.getPredio().getId()+", "+
                    "0)";

        let id = await BD.query(query).then( (retorno) => {
                                return retorno.insertId;
                            });

        sala.setId(id);

        return sala;
   }

   static async insertMany(salas){
     let salas_retorno = [];

     for(let i =0; i < salas.length; i++){
        salas_retorno.push(await  this.insert(salas[i]));
     }

     return salas_retorno;
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