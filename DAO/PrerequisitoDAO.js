"use strict";
import BD from '../BD';
import Prerequisito from '../modelos/Prerequisito';

export default class PrerequisitoDAO{
   
    static async insertPrerequisito(prerequisito){
        try {
            var retorno = await BD.inserir(prerequisito);
            prerequisito.setGrade(retorno.grade_id);
            prerequisito.setDisciplina(retorno.id_disciplina);
            prerequisito.setRequisito(retorno.id_requisito);
            return prerequisito;
        } catch (error) {
            return error.message;
        }

    }
    static async selectPrerequisito(id_disciplina, id_requisito){
        try {
            var prerequisito = new Prerequisito();
            prerequisito.setIdDisciplina(id_disciplina);
            prerequisito.setIdRequisito(id_requisito);

            var retorno = await BD.buscar(prerequisito);
                prerequisito.setDisciplina(retorno.id_disciplina);
                prerequisito.setRequisito(retorno.id_requisito); 
                prerequisito.setGrade(retorno.grade_id);
        
            return prerequisito;
        } catch (error) {
            return error.message;
        }
    }

    static async selectAll(){
        return await BD.query("SELECT * FROM prerequisito");
   }


   static async updatePrerequisito(prerequisito){
        try {
            return await BD.update(prerequisito);
        } catch (error) {
            return error.message;
        }

    }
    static async deletePrerequisito(prerequisito){
        try {
            return await BD.deletar(prerequisito);
        } catch (error) {
            return error.message;
        }
    }
}