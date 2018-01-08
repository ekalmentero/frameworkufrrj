import Material from '../modelos/material';
import MaterialDAO from '../DAO/materialDAO';
import Conteudo from '../modelos/conteudo';
import ConteudoDAO from '../DAO/conteudoDAO';

export default class MaterialController {

  static async create(material, id_conteudo){
      var materialObj = new Material();
      materialObj.parseEntidade(material);
      return await MaterialDAO.create(materialObj);
  }

    static async read(id){
        var material = new Material();
        material.id = id;
        return await MaterialDAO.read(material);
    }

    static async readAll(){
        return await MaterialDAO.readAll();
    }

    static async readAllByTurma(id_turma){
      return await MaterialDAO.readAllByTurma(id_turma);
    }

    static async update(material, id_conteudo){
        var materialObj = new Material();
        materialObj.parseEntidade(material);
        if (typeof(id_conteudo) == "undefined")
          return await MaterialDAO.update(materialObj);
        else
          return await MaterialDAO.update(materialObj, id_conteudo);

    }

    static async delete(material){
        var materialObj = new Material();
        materialObj.parseEntidade(material);
        return await MaterialDAO.delete(materialObj);
    }


}
