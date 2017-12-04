import avaliacao from '../modelos/Avaliacao';
import AvaliacaoDAO from '../DAO/AvaliacaoDAO';

export default class avaliacaoController {
    static async create(avaliacao, idTurma = undefined){
        var avaliacaoObj = new avaliacao();
        avaliacaoObj.parseEntidade(avaliacao);
        return await avaliacaoDAO.create(avaliacaoObj, idTurma);
    }

    static async read(idAvaliacao){
        var avaliacao = new avaliacao();
        avaliacao.setId(idAvaliacao);
        return await avaliacaoDAO.read(avaliacao);
    }

    static async update(avaliacao, idTurma = undefined){
        var avaliacaoObj = new avaliacao();
        avaliacaoObj.parseEntidade(avaliacao);
        return await avaliacaoDAO.update(avaliacaoObj, idTurma);
    }

    static async delete(avaliacao){
        var avaliacaoObj = new avaliacao();
        avaliacaoObj.parseEntidade(avaliacao);
        return await avaliacaoDAO.delete(avaliacaoObj);
    }

    static async readAllByTurma(idTurma){
        return await avaliacaoDAO.readAllByTurma(idTurma);
    }
}
