"use strict";
export default class Prerequisito{
  
    Constructor(id_disciplina, id_requisito, grade_id){
        this.id_disciplina = id_disciplina;
        this.id_requisito = id_requisito;
        this.grade_id = grade_id;
    }
     getIdDisciplina() {
        return this.id_disciplina;
      }
      
      getIdRequisito() {
        return this.id_requisito;
      }
      getGradeId() {
        return this.grade_id;
      }
      
      setIdDisciplina(id_disciplina) {
        this.id_disciplina = id_disciplina;
      }
      setIdRequisito(id_requisito) {
        this.id_requisito = id_requisito;
      }
      setGradeId(grade_id) {
        this.grade_id = grade_id;
      }

}

