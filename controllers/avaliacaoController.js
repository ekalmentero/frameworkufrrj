import Avaliacao from '../modelos/Avaliacao';
import AvaliacaoDAO from '../DAO/AvaliacaoDAO';
export default class AvaliacaoController {
    static async create(avaliacao, id_turma){
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.setNome(avaliacao.nome);
        avaliacaoObj.setData(avaliacao.data);
        avaliacaoObj.setDescricao(avaliacao.descricao);
        return await AvaliacaoDAO.create(avaliacaoObj, id_turma);
    }

    static async read(id){
        var avaliacao = new Avaliacao();
        avaliacao.setId(id);
        return await AvaliacaoDAO.read(avaliacao);
    }

    static async readByTurma(id_avaliacao, id_turma){
        return await AvaliacaoDAO.readByTurma(id_avaliacao, id_turma);
    }

    static async readAll(){
        return await AvaliacaoDAO.readAll();
    }

    static async readAllByTurma(id_turma){
        return await AvaliacaoDAO.readAllByTurma(id_turma);
    }

    static async update(avaliacao, id_turma){
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.setId(avaliacao.id);
        avaliacaoObj.setNome(avaliacao.nome);
        avaliacaoObj.setData(avaliacao.data);
        avaliacaoObj.setDescricao(avaliacao.descricao);
        if (typeof(id_turma) == "undefined")
            return await AvaliacaoDAO.update(avaliacaoObj);
        else
            return await AvaliacaoDAO.update(avaliacaoObj, id_turma);
    }

    static async delete(avaliacao){
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.setId(avaliacao.id);
        avaliacaoObj.setNome(avaliacao.nome);
        avaliacaoObj.setData(avaliacao.data);
        avaliacaoObj.setDescricao(avaliacao.descricao);
        return await AvaliacaoDAO.delete(avaliacaoObj);
    }

    static async listarAvaliacoesTurma(id){ //listar avaliações de uma turma
        //var turma = new Turma();
        //turma.setId(id);
        return await AvaliacaoDAO.listarAvaliacoesTurma(id);
      }
}
