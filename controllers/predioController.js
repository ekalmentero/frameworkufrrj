"use strict";

import PredioDAO from '../DAO/PredioDAO.js';
import Predio from '../modelos/Predio.js';

class PredioController {
	
	static async create(predio, a_id_instituto){
        var predioObj = new Predio();
        predioObj.parseEntidade(predio);
        return await PredioDAO.create(predioObj, a_id_instituto);
    }

    static async read(id){
        var predio = new Predio();
        predio.setId(id);
        return await PredioDAO.read(predio);
    }

    static async readAll(){
        return await PredioDAO.readAll();
    }

    static async update(predio){
        var predioObj = new Predio();
        predioObj.parseEntidade(predio); 
        return await PredioDAO.update(predioObj);
    }

    static async delete(predio){
        var predioObj = new Predio();
        predioObj.parseEntidade(predio);
        return await PredioDAO.delete(predioObj);
    }
	
}

module.exports = PredioController;