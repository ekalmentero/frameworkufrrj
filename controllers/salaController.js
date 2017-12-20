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

        return await SalaDAO.insert(sala);
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

     static async update_many(dados_salas){
        let salas = dados_salas.map( (raw_sala) => {
            let sala = new Sala();
            sala.setNome(raw_sala.nome);
            
            let predio = new Predio();
            predio.setId(raw_sala.predio);
            sala.setPredio(predio);

            return sala;
        });
        
        return await SalaDAO.updateMany(salas);
    }

    static async search(dados_sala){
        var sala = new Sala();
        sala.fillFromObject(dados_sala);
        return await SalaDAO.search(sala);
    }

    static async readAll(){
        return await SalaDAO.readAll();
    }

    static async read(id){
        let sala = new Sala();
        sala.setId(id)
        return await SalaDAO.read(sala);
    }

    static async update(sala){
        var salaObj = new Sala();
        salaObj.fillFromObject(sala); 
        return await SalaDAO.update(salaObj);
    }

    static async delete(sala){
        var salaObj = new Sala();
        salaObj.fillFromObject(sala);
        return await SalaDAO.delete(salaObj);
    }

    static async readAllByPredioId(predio_id){
        return await SalaDAO.readAllByPredioId(predio_id);
    }

    static async syncWithPredio(predio_id, salas){
        let salas_objs = salas.map( (raw_sala) => {
            let sala = new Sala();
            sala.fillFromObject(raw_sala);
            return sala;
        })
        return await SalaDAO.syncWithPredio(predio_id, salas_objs);
    }
    
}

module.exports = SalaController;