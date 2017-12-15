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
     get Disciplina() {
        return this.disciplina;
      }
      
      get Requisito() {
        return this.requisito;
      }
      get Grade() {
        return this.grade;
      }
      
      set Disciplina(disciplina) {
        this.disciplina = disciplina;
      }
      set Requisito(requisito) {
        this.requisito = requisito;
      }
      set Grade(grade) {
        this.grade = grade;
      }

}

