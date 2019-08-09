"use strict";

import InstitutoDAO from '../DAO/InstitutoDAO.js';
import Instituto from '../modelos/Instituto.js';

class InstitutoController {
	
	static async create(instituto){
        var institutoObj = new Instituto();
        institutoObj.parseEntidade(instituto);
        return await InstitutoDAO.create(institutoObj);
    }

    static async read(id){
        var instituto = new Instituto();
        instituto.setId(id);
        return await InstitutoDAO.read(instituto);
    }

    static async readAll(){
        return await InstitutoDAO.readAll();
    }

    static async update(instituto){
        var institutoObj = new Instituto();
        institutoObj.parseEntidade(instituto); 
        return await InstitutoDAO.update(institutoObj);
    }

    static async delete(instituto){
        var institutoObj = new Instituto();
        institutoObj.parseEntidade(instituto);
        return await InstitutoDAO.delete(institutoObj);
    }
	
}

module.exports = InstitutoController;