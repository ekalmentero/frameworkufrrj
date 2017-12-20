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

      console.log(query);
      
      let id = await BD.query(query).then( (retorno) => {
                                return retorno.insertId;
                            });

      sala.setId(id);

      return sala;
   }

   static async read(sala){
      let query = "SELECT * FROM sala WHERE id = "+sala.getId();
      return await BD.query( query );
   }

   static async insertMany(salas){
     let salas_retorno = [];

     for(let i =0; i < salas.length; i++){
        salas_retorno.push(await this.insert(salas[i]));
     }

     return salas_retorno;
   }

   static async updateMany(salas){
     let salas_retorno = [];

     for(let i =0; i < salas.length; i++){

        salas_retorno.push(await this.update(salas[i]));
     }

     return salas_retorno;
   }

   /*
    * Sincroniza as salas de um prédio.
    * Recebe um array de salas e o id de um predio. Qualquer sala
    * que não esteja presente nesse array, e pertencer
    * a aquele prédio será removida.
   */
   static async syncWithPredio(predio_id, salas){

     let salas_para_atualizar = salas.filter( (sala) => {
        return sala.getId() !== null && sala.getId() !== undefined;
     });

     let ids_salas_para_atualizar = salas_para_atualizar.map( (sala) => {
        return sala.getId();
     });


     let salas_para_criar = salas.filter( (sala) => {
        return sala.getId() == null && sala.getNome() !== "";
     });

     let salas_do_predio = await this.readAllByPredioId(predio_id);

     let salas_para_deletar = salas_do_predio.filter( (sala) => {
          return ids_salas_para_atualizar.indexOf(sala.getId().toString()) === -1;
     });

     console.log('atualizar', salas_para_atualizar);
     console.log('salas_para_deletar', salas_para_deletar);
     console.log('salas_para_criar', salas_para_criar);

     await this.updateMany(salas_para_atualizar);
     await this.deleteMany(salas_para_deletar);
    
     for(let i =0; i < salas_para_criar.length; i++){
        let predio = new Predio();
        predio.setId(predio_id);
        salas_para_criar[i].setPredio(predio)
        await this.insert(salas_para_criar[i]);
     }

     return true;
   }

  
   static async select(sala){ 
      let query = "SELECT * FROM sala WHERE id = "+sala.getId();
      let sal_return = new Sala(),
          sal_raw = await BD.query(query)[0];

          sal_return.setId(id);
          sal_return.setNome(sal_raw.nome);
          sal_return.setId(sal_raw.id);
          sal_return.setDeleted(sal_raw.deleted);

          return sal_return;
   }
   

   static async update(sala){

        let query = "UPDATE sala SET ";
        let sets_array = [];
        let where = "WHERE id = "+sala.getId()+" AND deleted=0 ";

        if(sala.getNome() !== "")
            sets_array.push("nome = '"+sala.getNome()+"'");

        if(sets_array.length == 0)
            return sala;

        return await BD.query( query.concat( sets_array.join(","), where ) );
   }

   static async deleteMany(salas){
      let ids = salas.map ( (sala) => {
        return sala.getId();
      });

      let query = "UPDATE sala SET deleted=1 "+
                  "WHERE id in ("+ids.join(" , ")+")";

      console.log(query);
      return await BD.query( query );
   }

   static async delete(sala){ 
     let query = "UPDATE sala SET deleted=1 "+
                 "WHERE id = "+sala.getId();
        
        return await BD.query( query );
   } 

   static async search(sala){
      let query = "SELECT * from sala WHERE deleted = 0";
      let wheres_array = [];

      if(sala.getNome() !== "" && sala.getNome() !== undefined)
         wheres_array.push("nome = "+sala.getNome());

      if(wheres_array.length > 0)
        query = query.concat(" AND ",wheres_array.join(","));

      return await BD.query( query );
   }

   static async readAllByPredioId(predio_id){ 
      let query = "SELECT * from sala WHERE predio="+predio_id;
      return await BD.query(query).then( (retorno) =>{
          return retorno.map( (raw_sala) =>{
            let sala = new Sala();
            sala.setNome(raw_sala.nome);
            sala.setId(raw_sala.id);
            return sala;
          })
      });
   }
}