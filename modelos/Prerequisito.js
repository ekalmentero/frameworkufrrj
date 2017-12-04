"use strict";

import Grade from 'Grade';
import Disciplina from 'Disciplina';

export default class Prerequisito{
  @Private discuplina = new Disciplina();
  @Private requisito = new Disciplina();
  @Private grade = new Grade();
  
    constructor(){
      super();
    }
     get getDisciplina() {
        return this.disciplina;
      }
      
      get getRequisito() {
        return this.requisito;
      }
      get getGrade() {
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

