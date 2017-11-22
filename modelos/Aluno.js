"use strict";
import Curso from './curso';
import Grade from './Grade';
import Entidade from './entidade';
export default class Aluno extends Entidade{
  @Private id;
  @Private nome;
  @Private matrcula;
  @Private ativo;
  @Private ingresso;
  @Private avaliacoes = [];
  @Private curso = new Curso();
  @Private grade = new Grade();

    constructor(){
      super();
    }
     get Id() {
        return this.id;
      }
      get Curso() {
        return this.curso;
      }
      get Grade() {
        return this.grade;
      }
      get Nome() {
        return this.nome;
      }
      get Matricula() {
        return this.matricula;
      }
      get Ativo() {
        return this.ativo;
      }
      get Ingresso() {
        return this.ingresso;
      }
      get Avaliacoes(){
        return this.avaliacoes;
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
      setAvaliacoes(avaliacao){
        this.avaliacoes.push(avaliacao);

      }

    }
