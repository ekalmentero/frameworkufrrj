"use strict";
export default class Grade{
  @Private id;
  @Private nome;
  @Private matrcula;
  @Private ativo;
  @Private ingresso;
  @Private deleted;
  @Private curso_id;
  @Private grade_id;

    Constructor(id, nome, matricula, ativo, ingresso, deleted, curso_id, grade_id){
        this.setId(id);
        this.setNome(nome);
        this.setMatricula(matricula);
        this.setAtivo(ativo);
        this.setIngresso(ingresso);
        this.setDeleted(deleted);
        this.setCurso(curso_id);
        this.setGrade(grade_id);

    }
     get getId() {
        return this.id;
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
      get getDeleted() {
        return this.deleted;
      }
      get getCurso() {
        return this.curso_id;
      }
      get getGrade() {
        return this.grade_id;
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
      setDeleted(deleted) {
        this.deleted = deleted;
      }
      setCurso(curso_id) {
        this.curso_id = curso_id;
      }
      setGrade(grade_id) {
        this.grade_id = grade_id;
      }


}
