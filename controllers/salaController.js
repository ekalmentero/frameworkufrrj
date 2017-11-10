"use strict";

import SalaDAO from '../DAO/SalaDAO.js';
import Sala from '../modelos/Sala.js';

class SalaController {
	
	static async create(sala){
        var salaObj = new Sala();
        salaObj.parseEntidade(sala);
        return await SalaDAO.create(salaObj);
    }

    static async read(id){
        var sala = new Sala();
        sala.setId(id);
        return await SalaDAO.read(sala);
    }

    static async readAll(){
        return await SalaDAO.readAll();
    }

    static async update(sala){
        var salaObj = new Sala();
        salaObj.parseEntidade(sala); 
        return await SalaDAO.update(salaObj);
    }

    static async delete(sala){
        var salaObj = new Sala();
        salaObj.parseEntidade(sala);
        return await SalaDAO.delete(salaObj);
    }
    
}

module.exports = SalaController;