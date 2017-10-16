"use strict";
import BD from './BD';
import Grade from './modelos/Grade';


export class GradeDao{
    constructor(){

    }

    insertGrade(Grade){
        var bd = new BD();
        try {
            bd.inserir(Grade);
        } catch (error) {
            return error.message;
        }

    }
    selectGrade(id){
        var bd = new BD;
        try {
            var tmpGrade = new Grade();
            tmpGrade.setId(id);
            var retorno = bd.buscar(tmpGrade);

            tmpGrade.setinicioVigencia(retorno.inicioVigencia);
            //tmpGrade.setId(retorno.id);
            tmpGrade.setDisponivel(retorno.disponivel);
            tmpGrade.setDeleted(retorno.deleted);
            return tmpGrade;
            
        } catch (error) {
            return error.message;
        }
    }
    updateGrade(Grade){//rever
        var bd = new BD;
        try {
            bd.inserir(Grade)
        } catch (error) {
            
        }

    }
    deleteGrade(Grade){
        var bd = new BD;
        try {
            bd.deletar(Grade);
        } catch (error) {
            error.message;
        }
    }
}