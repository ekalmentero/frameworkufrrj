"use strict";

import HorarioDAO from '../DAO/HorarioDAO.js';
import Horario from '../modelos/Horario.js';

class HorarioController {
	
	static async create(horario){
        var horarioObj = new Horario();
        horarioObj.parseEntidade(horario);
        return await HorarioDAO.create(horarioObj);
    }

    static async read(id){
        var horario = new Horario();
        horario.setId(id);
        return await HorarioDAO.read(horario);
    }

    static async readAll(){
        return await HorarioDAO.readAll();
    }
    
    static async readAllByTurma(id_turma){
        return await HorarioDAO.readAllByTurma(id_turma);
    }

    static async update(horario){
        var horarioObj = new Horario();
        horarioObj.parseEntidade(horario); 
        return await HorarioDAO.update(horarioObj);
    }

    static async delete(horario){
        var horarioObj = new Horario();
        horarioObj.parseEntidade(horario);
        return await HorarioDAO.delete(horarioObj);
    }
}

module.exports = HorarioController;