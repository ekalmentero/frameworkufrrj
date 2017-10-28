"use strict";
import Curso from 'Curso';
import Grade from './Grade';
import Entidade from './entidade';
export default class Aluno extends Entidade{
  @Private id;
  @Private nome;
  @Private matrcula;
  @Private ativo;
  @Private ingresso;
  //@Private curso_id;
  @Private curso = new Curso();
  //@Private grade_id;
  @Private grade = new Grade();
  @Private avaliacoes = [];

    constructor(){
      super();
    }
     get getId() {
        return this.id;
      }
      get getCurso_id() {
        return this.curso;
      }
      get getGrade_id() {
        return this.grade;
      }
      get getNome() {
        return this.nome;
      }
      get getMatricula() {
        return this.matricula;
      }
      get getAtivo() {
        return this.ativo;
      }
      get getIngresso() {
        return this.ingresso;
      }
      setId(id) {
        this.id = id;
      }
      setNome(nome) {
        this.nome = nome;
      }
      setMatricula(matricula) {
        this.matricula = matricula;
      }
      setAtivo(ativo) {
        this.ativo = ativo;
      }
      setIngresso(ingresso) {
        this.ingresso = ingresso;
      }
      setCurso(curso) {
        this.curso = curso;
      }
      setGrade(grade) {
        this.grade = grade;
      }
      

}

