"use strict";
import BD from '../BD.js';
import Material from '../modelos/Material.js';
/* import Conteudo from "../modelos/Conteudo";
import Aula from "../modelos/Aula";
import Turma from '../modelos/Turma';
import ConteudoDAO from '../DAO/conteudoDAO';
import TurmaPeriodoDAO from '../DAO/turmaDAO';
*/
export default class MaterialDAO{

    static async create(material){
        try {
            var retorno = await BD.inserir(material);
            material.setID(retorno);
            return material;
        } catch (error) {
            return error.message;
        }

    }

    static async read(materialId){
        try {
            var material = new Material();
            material.setId(materialId);

            var retorno = await BD.buscar(material);
              material.setId(retorno.id);
              material.setArquivo(retorno.arquivo);
              material.setConteudo(retorno.conteudo);

            return material;

        } catch (error) {
            return error.message;
        }
    }

    static async readAll(){
        return await BD.query("SELECT * FROM material");
   }

   static async readAllByTurma(id_turma){
       return await BD.query("SELECT arquivo FROM material WHERE aula IN (SELECT aula FROM conteudo WHERE turma IN (SELECT turma FROM aula WHERE turma = " + id_turma + "))");
   }

    static async update(material){
      try{
        return await BD.update(material);

      } catch (error) {
         return error.message;
      }
    }

    static async delete(material){
      try {
          return await BD.deletar(material);
      } catch (error) {
         return error.message;
      }
  }

}
