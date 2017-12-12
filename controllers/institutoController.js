"use strict";

import InstitutoDAO from '../DAO/InstitutoDAO.js';
import Instituto from '../modelos/Instituto.js';

class InstitutoController {
	
	static async create(dados_instituto){
        let instituto = new Instituto();
        instituto.fillFromObject(dados_instituto);
        instituto = await InstitutoDAO.create(instituto);
        InstitutoDAO.linkDepartamentosByDepsId(instituto, dados_instituto.departamentos);
        InstitutoDAO.linkPrediosByPrediosId(instituto, dados_instituto.predios);

        return instituto;
    }

    static async read(id){
        var instituto = new Instituto();
        instituto.setId(id);
        return await InstitutoDAO.read(instituto);
    }

    static async readAll(){
        return await InstitutoDAO.readAll();
    }

    static async update(dados_instituto){
        var instituto = new Instituto();
        instituto.fillFromObject(dados_instituto);
        return await InstitutoDAO.update(instituto);
    }

    static async delete(instituto){
        var institutoObj = new Instituto();
        institutoObj.parseEntidade(instituto);
        return await InstitutoDAO.delete(institutoObj);
    }

    static async search(terms){
        let instituto = new Instituto();

        if(terms.nome !== undefined)
            instituto.setNome(terms.nome);

        if(terms.sigla !== undefined) 
            instituto.setSigla(terms.sigla);

        return await InstitutoDAO.search(instituto);
    }
	
}

module.exports = InstitutoController;