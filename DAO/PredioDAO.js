"use strict";

import BD from '../BD.js';
import Predio from '../modelos/Predio.js';
import InstitutoDAO from './InstitutoDAO.js';

export default class PredioDAO {
  
    constructor(){
        
    }

    static async insert(predio){ 

        let query = "INSERT INTO predio (nome, sigla, lat, `long`, deleted) VALUES "+
                    "('"+predio.getNome()+"', "+
                    "'"+predio.getSigla()+"', "+
                    "'"+predio.getLat()+"', "+
                    "'"+predio.getLong()+"', "+
                    "0)";

        console.log(query);

        let id = await BD.query(query).then( (retorno) => {
                                return retorno.insertId;
                            });

        predio.setId(id);

        return predio;
    }


    static async read(predio){
        var pre_return = new Predio();
            pre_raw = await BD.buscar(predio)[0];

        pre_return.setInstitutos(pre_raw.institutos);
        pre_return.setNome(pre_raw.nome);
        pre_return.setId(pre_raw.id);
        pre_return.setSigla(pre_raw.sigla);
        pre_return.setLat(pre_raw.lat);
        pre_return.setLong(pre_raw.long);
        pre_return.setDeleted(pre_raw.deleted);
           
        return pre_return;
    }

    /*
        Existem vários problemas com esse tipo de busca, 
        mas estou fazendo o básico para o funcionamento da integração.
    */
    static async search(predio){
        let query = "SELECT * from predio WHERE ",
            wheres_array = [];

        if(predio.getNome() !== "")
            wheres_array.push("nome like '%"+predio.getNome()+"%'");

        if(predio.getSigla() !== "")
            wheres_array.push("sigla like '%"+predio.getSigla()+"%'");

        if(predio.getId() !== null)
            wheres_array.push("id = "+predio.getId());

        if(predio.getLat() !== "")
            wheres_array.push("lat = '"+predio.getLat()+"'");

        if(predio.getLong() !== "")
            wheres_array.push("long = '"+predio.getLong()+"'");

        if(wheres_array.length == 0)
            return [];

        let predios = await BD.query( query.concat(wheres_array.join(" OR ")) )
                            .then( (retorno) => {
                                return retorno.map( (raw_pred) => {
                                            let pred = new Predio();
                                            pred.fillFromObject(raw_pred);
                                            return pred;
                                        });
                            });

        return predios;
    }

    static async readAll(){
        let query = "SELECT * FROM predio";
        let pred_objs = BD.query(query).then( (retorno) => {
            
            return retorno.map( (raw_pred) => {
                        let predio = new Predio();
                        predio.fillFromObject(raw_pred);
                        return predio;
                    })

        });

        return pred_objs;
    }


    static async readByInstituto(instituto){
        
        let query = "SELECT * from instituto_predio "+
                    "LEFT JOIN predio ON instituto_predio.predio = predio.id "+
                    "WHERE instituto_predio.instituto = "+instituto.getId();

        let retorno = await BD.query( query ).then( (retorno) => {
                                return retorno;
                            });
        
        return retorno;
    }
   
    static async update(predio){
        return await BD.update(predio);
    }
   
    static async delete(predio){
        return await BD.deletar(predio);
    }


}