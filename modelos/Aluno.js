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
     get getId() {
        return this.id;
      }
      get getCurso() {
        return this.curso;
      }
      get getGrade() {
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
      get getAvaliacoes(){
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
