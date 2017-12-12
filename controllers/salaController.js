"use strict";

import SalaDAO from '../DAO/SalaDAO.js';
import Sala from '../modelos/Sala.js';
import Predio from '../modelos/Predio.js';

class SalaController {
	
	static async create(dados_sala){
        let sala = new Sala();
        sala.setNome(dados_sala.nome);
        
        let predio = new Predio();
        predio.setId(dados_sala.predio);
        sala.setPredio(predio);

        return await SalaDAO.create(sala);
    }

    static async createMany(dados_salas){
        let salas = dados_salas.map( (raw_sala) => {
            let sala = new Sala();
            sala.setNome(raw_sala.nome);
            
            let predio = new Predio();
            predio.setId(raw_sala.predio);
            sala.setPredio(predio);

            return sala;
        });
        
        return await SalaDAO.insertMany(salas);
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