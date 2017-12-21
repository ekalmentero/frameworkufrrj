"use strict";
import BD from '../BD.js';
import Conteudo from '../modelos/Conteudo.js';

export default class ConteudoDAO{

    static async create(conteudo, id_aula){
        try {
          var foreignKeys = [];
          foreignKeys.push(['aula', id_aula]);
          var retorno = await BD.inserir(conteudo, foreignKeys);
          conteudo.Id = retorno;

          return conteudo;

        } catch (error) {
          return error.message;
        }
      }

    static async read(conteudo){
        try {
          var retorno = await BD.buscar(conteudo);
          return retorno[0];
        } catch (error) {
          return error.message;
        }
      }

  static async readAll() {
        return await BD.query("SELECT * FROM conteudo");
   }

   static async update(conteudo, id_aula) {
     try {
       if (typeof(id_aula) == "undefined")
         return await BD.update(conteudo);
       else{
         var foreignKeys = [];
         foreignKeys.push(['aula', id_aula]);
         return await BD.update(conteudo, foreignKeys);
       }
     } catch (error) {
       return error.message;
     }
   }

    static async delete(conteudo){
      try {
          return await BD.deletar(conteudo);
      } catch (error) {
         return error.message;
      }
  }

}
