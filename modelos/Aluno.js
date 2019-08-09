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

      set Id(id) {
        this.id = id;
      }
      set Nome(nome) {
        this.nome = nome;
      }
      set Matricula(matricula) {
        this.matricula = matricula;
      }
      set Ativo(ativo) {
        this.ativo = ativo;
      }
      set Ingresso(ingresso) {
        this.ingresso = ingresso;
      }
      set Curso(curso) {
        this.curso = curso;
      }
      set Grade(grade) {
        this.grade = grade;
      }
      set Avaliacoes(avaliacao){
        this.avaliacoes.push(avaliacao);

      }

    }
