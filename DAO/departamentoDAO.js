"use strict";

import Departamento from "../modelos/departamento";
import InstitutoDAO from './institutoDAO';
import BD from "../bd";

export default class DepartamentoDAO {
    static async create(departamento){
        var id = await BD.inserir(departamento);
        departamento.setId(id);
        return departamento;
    }

    static async read(departamento){
        var result =  await BD.buscar(departamento);

        departamento.setId(result[0].id);
        departamento.setNome(result[0].nome);
        departamento.setSigla(result[0].sigla);
        departamento.setDeleted(result[0].deleted);
        var tmpInstituto = await InstitutoDAO.read(retorno[0].instituto_id);
        departamento.setInstituto(tmpInstituto);

        return departamento;
    }

    static async readAll(){
        return await BD.query("SELECT * FROM departamento");
    }

    static async update(departamento){
        return await BD.update(departamento);
    }

    static async delete(departamento){
        return await BD.deletar(departamento);
    }
}
