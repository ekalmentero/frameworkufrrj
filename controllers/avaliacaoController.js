import Avaliacao from '../modelos/Avaliacao';
import Turma from '../modelos/Turma';
import AvaliacaoDAO from '../DAO/AvaliacaoDAO';
export default class AvaliacaoController {
    static async create(avaliacao){
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.parseEntidade(avaliacao);
        return await AvaliacaoDAO.create(avaliacaoObj);
    }

    static async read(id){
        var avaliacao = new Avaliacao();
        avaliacao.setId(id);
        return await AvaliacaoDAO.read(avaliacao);
    }

    static async readAll(){
        return await AvaliacaoDAO.readAll();
    }

    static async update(avaliacao){
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.parseEntidade(avaliacao); 
        return await AvaliacaoDAO.update(avaliacaoObj);
    }

    static async delete(avaliacao){
        var avaliacaoObj = new Avaliacao();
        avaliacaoObj.parseEntidade(avaliacao);
        return await AvaliacaoDAO.delete(avaliacaoObj);
    }

    static async listarAvaliacoesTurma(id){
        //var turma = new Turma();
        //turma.setId(id);
        return await AvaliacaoDAO.listarAvaliacoesTurma(id);
      }
}