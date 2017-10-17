"use strict";

import BD from '../BD.js';
import Sala from '../modelos/Sala.js';
import Predio from '../modelos/Predio.js';

export class SalaDao{
  

   constructor(){

   }


   insert(sala){
       try {
           BD.inserir(sala).then((retorno)=>{
               });
           BD.inserir(sala.getPredio()).then((retornoPredio)=>{
               });
               return "Sala "+retorno.nome+" inserido!";
       } catch (error) {
           return error.message;
       }

   }

  
   select(id){ 
       try {
           var tmpSala = new Sala();
           tmpSala.setId(id);

           BD.buscar(tmpSala).then((retorno)=>{
               tmpSala.setNome(retorno.nome);
               tmpSala.setId(retorno.id);
               tmpSala.setDeleted(retorno.deleted);
               //tmpSala.setPredio(retorno.deleted);
               
               });

           return tmpSala;
           
       } catch (error) {
           return error.message;
       }
   }
   

   update(sala){
       try {
           bd.update(sala)
           BD.update(sala).then((retorno)=>{
               });
               return "Sala "+retorno.nome+" Atualizado!";
       } catch (error) {
          return error.message;
       }

   }
   

   delete(sala){ 
       try {
           BD.deletar(sala).then((retorno)=>{
               });
               return "Sala "+retorno.nome+" deletado!";
       } catch (error) {
          return error.message;
       }
   }
}