"use strict";
import Aluno from './Aluno';
import Turma from './Turma';
import Conceito from './conceito';
import Entidade from './entidade';

export default class AlunoTurma extends Entidade{
  @Private id;
  @Private nota_final;
  @Private conceito;
  @Private aluno;
  @Private turma;

  constructor(){
      super();
      this.id = undefined;
      this.nota_final = undefined;
      this.conceito = new Conceito();
      this.turma = new Turma();
      this.aluno = new Aluno();
  }
     get getId() {
        return this.id;
      }
      get getAluno() {
        return this.aluno;
      }
      get getTurma() {
        return this.turma;
      }

      get getAvaliacoes(){
        return this.nota_final;
      }

      get getConceito(){
        return this.conceito;
      }

      setId(id) {
        this.id = id;
      }

      setTurma(turma) {
        this.turma = turma;
      }

      setAluno(aluno) {
        this.aluno = aluno;
      }

      setNotaFinal(notaFinal){
        this.nota_final = notaFinal;

      }

      setConceito(conceito){
        this.conceito = conceito;

      }

    }
