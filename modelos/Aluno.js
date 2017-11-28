"use strict";
import Entidade from './entidade';
import Curso from '../modelos/curso';
import Grade from '../modelos/Grade';
export default class Aluno extends Entidade{
  @Private id;
  @Private nome;
  @Private matricula;
  @Private ativo;
  @Private ingresso;
  @Private curso = new Curso();
  @Private grade = new Grade();

    constructor(){
      super();
      this.nome=undefined;
      this.matricula=undefined;
      this.ativo=undefined;
      this.ingresso=undefined;
      this.curso= new Curso();
      this.grade= new Grade();
    }
     get Id() {
        return this.id;
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
      get Curso(){
        return this.curso.toString();
      }
      get Grade(){
        return this.grade.toString();
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
      set Ingresso(curso) {
        this.curso = curso;
      }
      set Ingresso(grade) {
        this.grade = grade;
      }
    }
