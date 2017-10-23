"use strict";
import BD from '../BD';
import Grade from '../modelos/Grade';

export default class GradeDAO{
   
    static async insertGrade(grade){
        try {
            var retorno = await BD.inserir(grade);
            grade.setId(retorno);
            return grade;
        } catch (error) {
            return error.message;
        }

    }
    static async selectGrade(gradeId){
        try {
            var grade = new Grade();
            grade.setId(gradeId);

            var retorno = await BD.buscar(grade);
                grade.setinicioVigencia(retorno.inicio_vigencia);
                grade.setId(retorno.id);
                grade.setDisponivel(retorno.disponivel);
                grade.setDeleted(retorno.deleted);
                grade.setDeleted(retorno.curso_id);
            
                return grade;
            
        } catch (error) {
            return error.message;
        }
    }

    static async selectAll(){
        return await BD.query("SELECT * FROM grade");
   }

   static async updateGrade(grade){
        try {
            return await BD.update(grade);
        } catch (error) {
            return error.message;
        }

    }
    static async deleteGrade(grade){
        try {
            return await BD.deletar(grade);
        } catch (error) {
            return error.message;
        }
    }
}