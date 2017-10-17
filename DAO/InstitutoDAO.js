"use strict";
import BD from '../BD.js';
import Instituto from '../modelos/Instituto.js';

export class InstitutoDao {
   constructor(){

   }

   insert(instituto){
       try {
           BD.inserir(instituto).then((retorno)=>{
               });
               return "Instituto "+retorno.nome+" inserido!";
       } catch (error) {
           return error.message;
       }

   }
   

   select(id){ 
       try {
           var tmpInstituto = new Instituto();
           tmpInstituto.setId(id);

           BD.buscar(tmpInstituto).then((retorno)=>{
               tmpInstituto.setNome(retorno.nome);
               tmpInstituto.setSigla(retorno.sigla);
               tmpInstituto.setId(retorno.id);
               tmpInstituto.setDeleted(retorno.deleted);
               
               });

           return tmpInstituto;
           
       } catch (error) {
           return error.message;
       }
   }


   update(instituto){
       try {
           bd.update(instituto)
           BD.update(instituto).then((retorno)=>{
               });
               return "Instituto "+retorno.nome+" Atualizado!";
       } catch (error) {
          return error.message;
       }

   }


   delete(instituto){ 
       try {
           BD.deletar(instituto).then((retorno)=>{
               });
               return "Instituto "+retorno.nome+" deletado!";
       } catch (error) {
          return error.message;
       }
   }
}