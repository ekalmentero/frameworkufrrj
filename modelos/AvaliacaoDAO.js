"use strict";
import BD from './BD';
import Avaliacao from './modelos/Avaliacao';

export class AvaliacaoDao{
    constructor(){

    }

    insertAvaliacao(Avaliacao){
        var bd = new BD();
        try {
            bd.inserir(Avaliacao);
        } catch (error) {
            return error.message;
        }

    }
    selectAvaliacao(avaliacaoID){
        var bd = new BD;
        try {
            var tmpAvl = new Avaliacao();
            tmpAvl.setID(avaliacaoID);
            var retorno = bd.buscar(tmpAvl);
            tmpAvl.setAlunoId(retorno.alunoId);
            tmpAvl.setNota(retorno.nota);
            return tmpAvl;
        } catch (error) {
            return error.message;
        }
    }
    updateAvaliacao(Avaliacao){
        var bd = new BD;
        try {
            bd.update(Avaliacao)
        } catch (error) {
            return error.message;
        }

    }
    deleteAvaliacao(Avaliacao){
        var bd = new BD;
        try {
            bd.deletar(Avaliacao);
        } catch (error) {
            return error.message;
        }
    }
}