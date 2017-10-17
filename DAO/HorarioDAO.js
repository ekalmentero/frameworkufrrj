"use strict";

import BD from '../BD.js';
import Horario from '../modelos/Horario.js';

export class HorarioDAO {
  
    constructor(){
        
    }

    insert(horario){
        try {
            
            BD.inserir(horario).then((retorno)=>{});
            return "Horario inserida!";
        
        } catch (error) {
            return error.message;
        }

    }
    

    select(horario_id){
        try {
            
            var horario = new Horario();
            horario.setID(horario_id);

            BD.buscar(horario).then((retorno)=>{
               horario.setId(retorno.id);
               horario.setHoraInicio(retorno.hora_inicio);
               horario.setHoraFim(retorno.hora_fim);
            });
           

            return Horario;

        } catch (error) {
            return error.message;
        }
    }
   
    update(horario){
        try {
            
            BD.update(horario).then((retorno)=>{});
            return "Horario atualizada!";

        } catch (error) {
            return error.message;
        }

    }
   
    delete(horario){
        try {
            
            BD.deletar(horario).then((retorno)=>{});
            return "Horario deletada!";
      
        } catch (error) {
            return error.message;
        }
    }

}