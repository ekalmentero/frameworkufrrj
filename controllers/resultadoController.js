import Resultado from '../modelos/Resultado';
import ResultadoDAO from '../DAO/ResultadoDAO';
export default class ResultadoController {
    static async create(resultado, id_avaliacao){
        var resultadoObj = new Resultado();
        resultadoObj.setNota(resultado.nota);
        resultadoObj.setAluno(resultado.aluno);
        return await ResultadoDAO.create(resultadoObj, id_avaliacao);
    }

    static async readAll(){
        return await ResultadoDAO.readAll();
    }

    static async readAllByAvaliacao(id_avaliacao){
        return await ResultadoDAO.readAllByAvaliacao(id_avaliacao);
    }

    static async readAllByAluno(id_aluno){
        return await ResultadoDAO.readAllByAluno(id_aluno);
    }

    static async update(resultado, id_avaliacao){
        var resultadoObj = new Resultado(); 
        resultadoObj.setNota(resultado.nota);
        resultadoObj.setAluno(resultado.aluno);
        if (typeof(id_avaliacao) == "undefined")
            return await ResultadoDAO.update(resultadoObj);
        else
            return await ResultadoDAO.update(resultadoObj, id_avaliacao);
    }

    /*static async read(id){
        var Resultado = new Resultado();
        resultado.setId(id);
        return await ResultadoDAO.read(resultado);
    }*/

    /*static async readByAvaliacao(id_resultado, id_avaliacao){
        return await ResultadoDAO.readByAvaliacao(id_resultado, id_avaliacao);
    }*/

    /*static async delete(resultado){
        var resultadoObj = new Resultado();
        resultadoObj.parseEntidade(avaliacao);
        return await ResultadoDAO.delete(resultadoObj);
    }*/
}
