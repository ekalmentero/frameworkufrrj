"use strict";

import BD from '../BD.js';
import Predio from '../modelos/Predio.js';
import InstitutoDAO from './InstitutoDAO.js';
import SalaDAO from './SalaDAO.js';

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

        let id = await BD.query(query).then( (retorno) => {
                                return retorno.insertId;
                            });

        predio.setId(id);

        return predio;
    }


    static async read(predio){
        let query = "SELECT * FROM predio WHERE id="+predio.getId()+" AND deleted=0";
        let pre_return = new Predio();
        console.log(query);
        let pre_raw = (await BD.query(query))[0];

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
        let query = "SELECT * from predio WHERE deleted=0 ",
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
       
        if(wheres_array.length > 0)
            query = query.concat(" AND ",wheres_array.join(" OR "));

        let predios = await BD.query( query )
                            .then( (retorno) => {
                                return retorno.map( (raw_pred) => {
                                            let pred = new Predio();
                                            pred.fillFromObject(raw_pred);
                                            return pred;
                                        });
                            });

        return predios;
    }

    static async readByInstituto(instituto){
        
        let query = "SELECT * from instituto_predio "+
                    "LEFT JOIN predio ON instituto_predio.predio = predio.id "+
                    "WHERE instituto_predio.instituto = "+instituto.getId()+" "
                    "AND deleted = 0";

        let retorno = await BD.query( query ).then( (retorno) => {
                                return retorno;
                            });
        
        return retorno;
    }
   
    static async update(predio){
        let query = "UPDATE predio SET ";
        let sets_array = [];
        let where = "WHERE id = "+predio.getId()+" AND deleted=0 ";

        if(predio.getNome() !== "")
            sets_array.push("nome='"+predio.getNome()+"'");

        if(predio.getSigla() !== "")
            sets_array.push("sigla='"+predio.getSigla()+"'");

        if(sets_array.length == 0)
            return predio;

        return await BD.query( query.concat( sets_array.join(","), where ) );
    }


    static async delete(predio){
        let query = "UPDATE predio SET deleted=1 "+
                    "WHERE id = "+predio.getId();
        
        return await BD.query( query );
    }


    static async readAllByInstitutoId(inst_id){
        let query = "SELECT predio.sigla, predio.nome, predio.id, predio.lat, predio.long "+
                    "FROM instituto_predio "+
                    "LEFT JOIN predio ON predio.id = instituto_predio.predio "+
                    "WHERE instituto_predio.instituto = "+inst_id;

        return await BD.query(query);
    }

}