"use strict";
import Grade from 'Grade';
import Disciplina from 'Disciplina';
export default class Prerequisito{
  //@Private id_disciplina;
  @Private discuplina = new Disciplina();
  //@Private id_requisito;
  @Private requisito = new Disciplina();
  //@Private grade_id;
  @Private grade = new Grade();
  
    Constructor(){
    }
     get getId_disciplina() {
        return this.disciplina;
      }
      
      get getId_requisito() {
        return this.requisito;
      }
      get getGrade_id() {
        return this.grade;
      }
      
      setDisciplina(disciplina) {
        this.disciplina = disciplina;
      }
      setRequisito(requisito) {
        this.requisito = requisito;
      }
      setGrade(grade) {
        this.grade = grade;
      }

}

