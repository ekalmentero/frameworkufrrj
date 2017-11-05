"use strict";

import AulaDAO from '../DAO/AulaDAO.js';
import Aula from '../modelos/Aula.js';

class AulaController {

	/** Retorna a view de criar uma aula
		@TODO implementar, se for necessário
	*/
	static create(req, res){
		//
	}


	/** Retorna a view de criar uma aula
		@TODO implementar, se for necessário
	*/
	static edit(req, res){
		//
	}

	/** 
	*	Guarda uma aula no banco
	*/
	static store(req, res){
		/*dados hard coded*/
		req.aula_data = "2017-10-10";
		req.aula_turma_id = "10";
		/***/
 		
		let aula = new Aula();
		aula.setData(req.aula_data);
		aula.setTurmaId(req.aula_turma_id);
		
		AulaDAO.insert(aula);

 		res.send("Testando inserção de aula.");

	}

	/** 
	*	Atualiza uma aula no banco
	*/
	static update(req, res){
		/*dados hard coded*/
		req.aula_id = "1";
		req.aula_data = "2017-11-11";
		req.aula_turma_id = "11";
		/***/

		let aula = new Aula();
		aula.setId(req.aula_id);
		aula.setTurmaId(req.aula_turma_id);
		aula.setData(req.aula_data);
		AulaDAO.update(aula);

		res.send("Testando atualização de aula.");

	}
	
	/** 
	*	Exclui uma aula no banco
	*/
	static delete(req, res){
		/*dados hard coded*/
		req.aula_id = "1";
		/***/

		let aula = new Aula();
		aula.setId(req.aula_id);
		AulaDAO.delete(aula);

		res.send("Testando exclusão de aula.");
	}

	/** 
	*	Lê uma aula no banco
	*/
	static get(req, res){
		/*dados hard coded*/
		req.aula_id = "1";
		/***/

		let aula = new Aula();
		aula.setId(req.aula_id);
		AulaDAO.select(aula);
		res.send("Testando recuperação de aula.");
	}

}

module.exports = AulaController;