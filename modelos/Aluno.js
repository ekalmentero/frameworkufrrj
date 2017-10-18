"use strict";
export default class Grade{

    Constructor(id, nome, matricula, ativo, ingresso, deleted, curso_id, grade_id){
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.ativo = ativo;
        this.ingresso = ingresso;
        this.deleted = deleted;
        this.curso_id = curso_id;
        this.grade_id = grade_id;

    }
     getId() {
        return this.id;
      }
      
      getNome() {
        return this.nome;
      }
      getMatricula() {
        return this.matricula;
      }
      getAtivo() {
        return this.ativo;
      }
      getIngresso() {
        return this.ingresso;
      }
      getDeleted() {
        return this.deleted;
      }
      getCurso() {
        return this.curso_id;
      }
      getGrade() {
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

