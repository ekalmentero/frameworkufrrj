"use strict";
import BD from '../BD.js';
import Material from '../model/Material.js';

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

    static async select(materialId){
        try {
            var material = new Material();
            material.setId(materialId);

            var retorno = await BD.buscar(material);
              material.setId(retorno.id);
              material.setNome(retorno.nome);
              material.setAula(retorno.aula);

            return material;

        } catch (error) {
            return error.message;
        }
    }

    static async selectAll(){
        return await BD.query("SELECT * FROM material");
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
