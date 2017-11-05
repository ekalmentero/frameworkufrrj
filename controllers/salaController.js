"use strict";

import SalaDAO from '../DAO/SalaDAO.js';
import Sala from '../modelos/Sala.js';

class SalaController {
	
	/** Retorna a view de criar uma sala
		@TODO implementar, se for necessário
	*/
	static create(req, res){
		//
	}


	/** Retorna a view de criar uma sala
		@TODO implementar, se for necessário
	*/
	static edit(req, res){
		//
	}

	/** 
	*	Guarda uma sala no banco
	*	Obs.: Ainda não sei como vai ser a lógia para guardar os prédios
	*/
	static store(req, res){
		/*dados hard coded*/
		req.sala_nome = "205";
		//req.sala_predios = [];
		/***/
 		
		let sala = new Sala();
        sala.setNome(req.sala_nome);
		//sala.setPredios(req.sala_predios);

		SalaDAO.insert(sala);

 		res.send("Testando inserção de sala.");
	}

	/** 
	*	Atualiza uma sala no banco
	*/
	static update(req, res){
		//*dados hard coded*/
		req.sala_nome = "205";
		req.sala_id = "1";
		//req.sala_predios = [];
		/***/
 		
		let sala = new Sala();
        sala.setNome(req.sala_nome);
        sala.setId(req.sala_id);
		//sala.setPredios(req.sala_predios);

		SalaDAO.insert(sala);

 		res.send("Testando inserção de sala.");

	}
	
	/** 
	*	Exclui uma sala no banco
	*/
	static delete(req, res){
		/*dados hard coded*/
		req.sala_id = "1";
		/***/
 		
		let sala = new Sala();
		sala.setId(req.sala_id);

		SalaDAO.delete(sala);
		res.send("Testando exclusão de sala.");
	}

	/** 
	*	Lê uma sala no banco
	*/
	static get(req, res){
		/*dados hard coded*/
		req.sala_id = "1";
		/***/
 		
		let sala = new Sala();
		sala.setId(req.sala_id);

		SalaDAO.select(sala);
		res.send("Testando recuperação de sala.");
	}
}

module.exports = SalaController;