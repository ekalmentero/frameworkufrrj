"use strict";

import Departamento from "../modelos/Departamento";
import BD from "../BD";

export default class DepartamentoDAO {
    
    static async create(departamento){
        let query = "INSERT INTO departamento (nome, sigla, instituto, deleted) VALUES "+
                    "('"+departamento.getNome()+"', "+
                    "'"+departamento.getSigla()+"', "+
                    ""+departamento.getInstituto().getId()+", "+
                    "0)";

        var id = await BD.query(query).then( (retorno) => {
                                return retorno.insertId;
                            });

        departamento.setId(id);
        return departamento;
    }

    static async read(departamento){
        var result =  await BD.buscar(departamento);

        departamento.setId(result[0].id);
        departamento.setNome(result[0].nome);
        departamento.setSigla(result[0].sigla);
        departamento.setDeleted(result[0].deleted);
        departamento.setInstituto_id(result[0].instituto_id);

        return departamento;
    }

    static async readByInstituto(instituto){

        let query = "SELECT * from departamento "+
                    "WHERE departamento.instituto = "+instituto.getId();

        let retorno = await BD.query( query ).then( (retorno) => {
                                return retorno;
                            });
        
        return retorno;

    }

    static async readByInstitutoIds(ids_array){
        let query = "SELECT * from departamento "+
                    "WHERE id in ["+(ids_array.join(','))+"]";

        return await BD.query( query ).then( (retorno) => {
            return retorno;
        });
    }

    static async search(departamento){
        let query = "SELECT * from departamento WHERE deleted=0 ",
            wheres_array = [];

        if(departamento.getNome() !== "")
            wheres_array.push("nome like '%"+departamento.getNome()+"%'");

        if(departamento.getSigla() !== "")
            wheres_array.push("sigla like '%"+departamento.getSigla()+"%'");

        if(wheres_array.length == 0)
            return [];

        let departamentos = await BD.query( query.concat(wheres_array.join(" OR ")) )
                            .then( (retorno) => {
                                return retorno.map( (raw_dep) => {
                                            let dep = new Departamento();
                                            dep.fillFromObject(raw_dep);
                                            return dep;
                                        });
                            });

        return departamentos;
    }

    static async linkToInstitutoByDepsIds(dep_ids, instituto){
        let query = "UPDATE departamento "+
                    "SET instituto="+instituto.getId()+" "+
                    "WHERE departamento.id in ("+dep_ids.join(',')+")";

        return await BD.query(query).then( (retorno) => {
            return retorno;
        });
    }

    static async update(departamento){
        let query = "UPDATE departamento SET ";
        let sets_array = [];
        let where = "WHERE id = "+departamento.getId();

        if(departamento.getNome() !== "")
            sets_array.push("nome='"+departamento.getNome()+"'");

        if(departamento.getSigla() !== "")
            sets_array.push("sigla='"+departamento.getSigla()+"'");

        return await BD.query( query.concat( sets_array.join(","), where ) );
    }

    static async delete(departamento){
        let query = "UPDATE departamento SET deleted=1 "+
                    "WHERE id = "+departamento.getId();
        
        return await BD.query( query );
    }
}
