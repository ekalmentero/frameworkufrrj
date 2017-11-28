"use strict";
import Entidade from './entidade';
import Aluno from './Aluno';
export default class Resultado extends Entidade{
  @Private nota;
  @Private aluno = new Aluno();
  
    constructor(){
      super();
      this.nota=undefined;
      this.aluno = new Aluno();
    }
      get Nota() {
        return this.nota;
      }
      get Aluno() {
        return this.aluno;
      }
      
      set Nota(nota) {
        this.nota = nota;
      }
      set Aluno(aluno) {
        this.aluno = aluno;
      }

}
