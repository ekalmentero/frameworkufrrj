"use strict";
import BD from '../BD.js';
import Conteudo from '../model/Conteudo.js';

export default class ConteudoDAO{

    static async create(conteudo){
        try {
            var retorno = await BD.inserir(conteudo);
            conteudo.setID(retorno);
            return conteudo;
        } catch (error) {
            return error.message;
        }

    }

    static async select(conteudoId){
        try {
            var conteudo = new Conteudo();
            conteudo.setId(conteudoId);

            var retorno = await BD.buscar(conteudo);
              conteudo.setId(retorno.id);
              conteudo.setNome(retorno.nome);
              conteudo.setAula(retorno.aula);

            return conteudo;

        } catch (error) {
            return error.message;
        }
    }

    static async selectAll(){
        return await BD.query("SELECT * FROM conteudo");
   }


    static async update(conteudo){
      try{
        return await BD.update(conteudo);

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
