"use strict";

import AulaDAO from '../DAO/AulaDAO.js';
import Aula from '../modelos/Aula.js';

class AulaController {

	static async create(aula, id_turma){
        var aulaObj = new Aula();
        aulaObj.parseEntidade(aula);
        return await AulaDAO.create(aulaObj, id_turma);
    }

    static async read(id){
        var aula = new Aula();
        aula.setId(id);
        return await AulaDAO.read(aula);
    }

    static async readAll(){
        return await AulaDAO.readAll();
    }

    static async update(aula){
        var aulaObj = new Aula();
        aulaObj.parseEntidade(aula); 
        return await AulaDAO.update(aulaObj);
    }

    static async delete(aula){
        var aulaObj = new Aula();
        aulaObj.parseEntidade(aula);
        return await AulaDAO.delete(aulaObj);
    }

}

module.exports = AulaController;