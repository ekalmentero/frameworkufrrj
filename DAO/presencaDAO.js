"use strict";

import Presenca from "../modelos/presenca";
import BD from "../bd";

export default class PresencaDAO {
    static async create(presenca){
        var id = await BD.inserir(presenca);
        return presenca;
    }

    static async read(presenca){
        var result =  await BD.buscar(presenca);
        presenca.setAula_id(result[0].aula_id);
        presenca.setAluno_id(result[0].aluno_id);
        presenca.setTipo_presenca_id(result[0].tipo_presenca_id);
        presenca.setDescricao_justificativa(result[0].descricao_justificativa);
        presenca.setArquivo_justificativa(result[0].arquivo_justificativa);
        return presenca;
    }

    static async readAll(){
        return await BD.query("SELECT * FROM presenca");
    }

    static async update(presenca){
        return await BD.update(presenca);
    }
}