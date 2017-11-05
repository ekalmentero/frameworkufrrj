"use strict";

import PredioDAO from '../DAO/PredioDAO.js';
import Predio from '../modelos/Predio.js';

class PredioController {
	
	/** Retorna a view de criar um predio
		@TODO implementar, se for necessário
	*/
	static create(req, res){
		//
	}


	/** Retorna a view de criar um predio
		@TODO implementar, se for necessário
	*/
	static edit(req, res){
		//
	}

	/** 
	*	Guarda um predio no banco
	*	Obs.: Ainda não sei como vai ser a lógia para guardar os prédios
	*/
	static store(req, res){
		/*dados hard coded*/
		req.pred_sigla = "PCE"; //eu sei que isso não existe... -.-'
		req.pred_nome = "Predio de Ciências Exatas";
		//req.pred_institutos = [];
		req.pred_lat = "50º N";
		req.pred_long = "-100º W"
		//req.inst_predios = [];
		/***/
 		
		let predio = new Predio();
		//predio.setInstitutos(req.pred_institutos);
        predio.setSigla(req.pred_sigla);
        predio.setLat(req.pred_lat);
        predio.setLong(req.pred_long);
        predio.setNome(req.pred_nome);

		PredioDAO.insert(predio);

 		res.send("Testando inserção de predio.");
	}

	/** 
	*	Atualiza um predio no banco
	*/
	static update(req, res){
		/*dados hard coded*/
		req.pred_id = "1"; //eu sei que isso não existe... -.-'
		req.pred_sigla = "PCE"; //eu sei que isso não existe... -.-'
		req.pred_nome = "Predio de Ciências Exatas";
		//req.pred_institutos = [];
		req.pred_lat = "50º N";
		req.pred_long = "-100º W"
		//req.inst_predios = [];
		/***/
 		
		let predio = new Predio();
		//predio.setInstitutos(req.pred_institutos);
        predio.setId(req.pred_id);
        predio.setSigla(req.pred_sigla);
        predio.setLat(req.pred_lat);
        predio.setLong(req.pred_long);
        predio.setNome(req.pred_nome);
        
		PredioDAO.insert(predio);

 		res.send("Testando inserção de predio.");

	}
	
	/** 
	*	Exclui um predio no banco
	*/
	static delete(req, res){
		/*dados hard coded*/
		req.pred_id = "1";
		/***/
 		
		let predio = new Predio();
		predio.setId(req.pred_id);

		PredioDAO.delete(predio);
		res.send("Testando exclusão de predio.");
	}

	/** 
	*	Lê um predio no banco
	*/
	static get(req, res){
		/*dados hard coded*/
		req.pred_id = "1";
		/***/
 		
		let predio = new Predio();
		predio.setId(req.pred_id);

		PredioDAO.select(predio);
		res.send("Testando recuperação de predio.");
	}
}

module.exports = PredioController;