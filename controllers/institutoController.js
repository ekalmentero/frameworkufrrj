"use strict";

import InstitutoDAO from '../DAO/InstitutoDAO.js';
import Instituto from '../modelos/Instituto.js';

class InstitutoController {
	
	/** Retorna a view de criar uma instituto
		@TODO implementar, se for necessário
	*/
	static create(req, res){
		//
	}


	/** Retorna a view de criar uma instituto
		@TODO implementar, se for necessário
	*/
	static edit(req, res){
		//
	}

	/** 
	*	Guarda uma instituto no banco
	*	Obs.: Ainda não sei como vai ser a lógia para guardar os prédios
	*/
	static store(req, res){
		/*dados hard coded*/
		req.inst_sigla = "ICE";
		req.inst_nome = "Instituto de Ciências Exatas";
		//req.inst_predios = [];
		/***/
 		
		let instituto = new Instituto();
		instituto.setSigla(req.inst_sigla);
		instituto.setNome(req.inst_nome);
		//instituto.setPredios(inst_predios);

		InstitutoDAO.insert(instituto);

 		res.send("Testando inserção de instituto.");
	}

	/** 
	*	Atualiza uma instituto no banco
	*/
	static update(req, res){
		/*dados hard coded*/
		req.inst_id = "1";
		req.inst_sigla = "ICE";
		req.inst_nome = "Instituto de Ciências Exatas";
		//req.inst_predios = [];
		/***/
 		
		let instituto = new Instituto();
		instituto.setId(req.inst_id);
		instituto.setSigla(req.inst_sigla);
		instituto.setNome(req.inst_nome);
		//instituto.setPredios(inst_predios);

		InstitutoDAO.insert(instituto);

 		res.send("Testando inserção de instituto.");

	}
	
	/** 
	*	Exclui uma instituto no banco
	*/
	static delete(req, res){
		/*dados hard coded*/
		req.inst_id = "1";
		/***/
 		
		let instituto = new Instituto();
		instituto.setId(req.inst_id);

		InstitutoDAO.delete(instituto);
		res.send("Testando exclusão de instituto.");
	}

	/** 
	*	Lê uma instituto no banco
	*/
	static get(req, res){
		/*dados hard coded*/
		req.inst_id = "1";
		/***/
 		
		let instituto = new Instituto();
		instituto.setId(req.inst_id);

		InstitutoDAO.select(instituto);
		res.send("Testando recuperação de instituto.");
	}
}

module.exports = InstitutoController;