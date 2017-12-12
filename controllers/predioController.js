"use strict";

import PredioDAO from '../DAO/PredioDAO.js';
import Predio from '../modelos/Predio.js';
import salaController from './salaController.js';

class PredioController {
	
	static async create(dados_predio){
        var predio = new Predio();

        predio.setNome(dados_predio.nome);
        predio.setSigla(dados_predio.sigla);
        predio.setLat(dados_predio.lat);
        predio.setLong(dados_predio.long);
       
        predio = await PredioDAO.insert(predio);

        let salas = dados_predio.salas.map( (raw_sala) => {
            return {nome : raw_sala.nome, predio : predio.getId() };
        });

        salaController.createMany(salas);

        //predioObj.parseEntidade(predio);
        return predio;
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

    static async search(terms){
        let predio = new Predio();

        if(terms.nome !== undefined)
            predio.setNome(terms.nome);

        if(terms.sigla !== undefined) 
            predio.setSigla(terms.sigla);

        if(terms.lat !== undefined)
            predio.setLat(terms.lat);

        if(terms.long !== undefined)
            predio.setLong(terms.long);

        return await PredioDAO.search(predio);
    }
	
}

module.exports = PredioController;