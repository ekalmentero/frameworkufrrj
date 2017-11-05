"use strict";

import HorarioDAO from '../DAO/HorarioDAO.js';
import Horario from '../modelos/Horario.js';

class HorarioController {
	
	/** Retorna a view de criar uma horário
		@TODO implementar, se for necessário
	*/
	static create(req, res){
		//
	}


	/** Retorna a view de criar uma horário
		@TODO implementar, se for necessário
	*/
	static edit(req, res){
		//
	}

	/** 
	*	Guarda uma horário no banco
	*/
	static store(req, res){
		/*dados hard coded*/
		req.hor_hora_inicio = "10:00:00";
		req.hor_hora_fim = "12:00:00";
		/***/
 		
		let horario = new Horario();
		horario.setHoraInicio(req.hor_hora_inicio);
		horario.setHoraFim(req.hor_hora_fim);

		HorarioDAO.insert(horario);

 		res.send("Testando inserção de horário.");
	}

	/** 
	*	Atualiza uma horário no banco
	*/
	static update(req, res){
		/*dados hard coded*/
		req.hor_id = "1";
		req.hor_hora_inicio = "10:00:00";
		req.hor_hora_fim = "12:00:00";
		/***/
 		
		let horario = new Horario();
		horario.setId(req.hor_id);
		horario.setHoraInicio(req.hor_hora_inicio);
		horario.setHoraFim(req.hor_hora_fim);

		HorarioDAO.update(horario);

		res.send("Testando atualização de horário.");

	}
	
	/** 
	*	Exclui uma horário no banco
	*/
	static delete(req, res){
		/*dados hard coded*/
		req.hor_id = "1";
		/***/
 		
		let horario = new Horario();
		horario.setId(req.hor_id);

		HorarioDAO.delete(horario);
		res.send("Testando exclusão de horário.");
	}

	/** 
	*	Lê uma horário no banco
	*/
	static get(req, res){
		/*dados hard coded*/
		req.hor_id = "1";
		/***/
 		
		let horario = new Horario();
		horario.setId(req.hor_id);

		HorarioDAO.select(horario);
		res.send("Testando recuperação de horário.");
	}
}

module.exports = HorarioController;