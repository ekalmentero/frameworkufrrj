"use strict";
export default class Prerequisito{
  @Private id_disciplina;
  @Private id_requisito;
  @Private grade_id;
  
    Constructor(id_disciplina, id_requisito, grade_id){
        this.setDisciplina(id_disciplina);
        this.setRequisito(id_requisito);
        this.setGrade(grade_id);
    }
     get getDisciplina() {
        return this.id_disciplina;
      }
      
      get getRequisito() {
        return this.id_requisito;
      }
      get getGrade() {
        return this.grade_id;
      }
      
      setDisciplina(id_disciplina) {
        this.id_disciplina = id_disciplina;
      }
      setRequisito(id_requisito) {
        this.id_requisito = id_requisito;
      }
      setGrade(grade_id) {
        this.grade_id = grade_id;
      }

}

