"use strict";
import BD from '../BD.js';
import Material from '../modelos/Material.js';

export default class MaterialDAO{

  static async create(material, id_conteudo){
      try {
        var foreignKeys = [];
        foreignKeys.push(['conteudo', id_conteudo]);
        var retorno = await BD.inserir(material, foreignKeys);
        material.Id = retorno;

        return material;

      } catch (error) {
        return error.message;
      }
    }

    static async read(material){
      try {
        var retorno = await BD.buscar(material);
        return retorno[0];
      } catch (error) {
        return error.message;
      }
    }

    static async readAll(){
        return await BD.query("SELECT * FROM material");
   }
    
   static async readByTurma(id_turma){
     return await BD.query("SELECT DISTINCT m.arquivo FROM aula a INNER JOIN conteudo c ON a.id=c.aula INNER JOIN m.conteudo=c.id WHERE a.turma='"+id_turma+"'" );
   }

    static async update(material, id_conteudo){
      try{
        if (typeof(id_conteudo) == "undefined")
          return await BD.update(material);
        else{
          var foreignKeys = [];
          foreignKeys.push(['conteudo', id_conteudo]);
          return await BD.update(material, foreignKeys);
        }
      } catch (error) {
        return error.message;
      }
    }

}
