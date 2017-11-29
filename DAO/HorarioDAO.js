"use strict";

import BD from '../BD.js';
import Horario from '../modelos/Horario.js';

export default class HorarioDAO {
  
    constructor(){
        
    }

    static async insert(horario){   
        var id = await BD.inserir(horario).catch((e) =>{
            console.log(e);
        });
        horario.setId(id);
        return horario;
    }
    

    static async select(horario){
        var hor_return = new Horario(),
            hor_raw = await BD.buscar(horario)[0];

        hor_return.setId(hor_raw.id);
        hor_return.setHoraInicio(hor_raw.hora_inicio);
        hor_return.setHoraFim(hor_raw.hora_fim);
           
        return hor_return;
    }

    static async readAllByTurma(id_turma){
        var result = await BD.query("SELECT * FROM horario WHERE turma = " + id_turma);
        var horarios = [];
        for (let object of result){
            var horario = new Horario();
            horario.parseEntidade(object);
            horarios.push(horario);
        } 
        return horarios;
    }
   
    static async update(horario){
        return await BD.update(horario);
    }
   
   static async  delete(horario){
        return await BD.deletar(horario); 
    }

}