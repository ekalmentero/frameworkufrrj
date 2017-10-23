"use strict";
import BD from '../BD';
import Avaliacao from '../modelos/Avaliacao';

export default class AvaliacaoDAO{

    static async insertAvaliacao(avaliacao){
        try {
            var retorno = await BD.inserir(avaliacao);
            avaliacao.setID(retorno);
            return avaliacao;
        } catch (error) {
            return error.message;
        }

    }
    static async selectAvaliacao(avaliacaoId){
        try {
            var avaliacao = new Avaliacao();
            avaliacao.setId(avaliacaoId);

            var retorno = await BD.buscar(avaliacao);
                avaliacao.setId(retorno.id);
                avaliacao.setNome(retorno.nome); 
                avaliacao.setData(retorno.data);
                avaliacao.setDescricao(retorno.descricao);
                avaliacao.setDeleted(retorno.deleted);
                avaliacao.setTurma(retorno.turma_id);
                
            return avaliacao;
        } catch (error) {
            return error.message;
        }
    }

    static async selectAll(){
        return await BD.query("SELECT * FROM avaliacao");
   }


   static async updateAvaliacao(avaliacao){
        try {
            return await BD.update(avaliacao);
        } catch (error) {
            return error.message;
        }

    }
    static async deleteAvaliacao(avaliacao){
        try {
            return await BD.deletar(avaliacao);
        } catch (error) {
            return error.message;
        }
    }
}