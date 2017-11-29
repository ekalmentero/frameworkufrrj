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
  @Private curso;
  @Private grade;
  @Private usuario;

    constructor(){
      super();
      this.nome=undefined;
      this.matricula=undefined;
      this.ativo=undefined;
      this.ingresso=undefined;
      this.grade=undefined;
      this.usuario=undefined;
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
        return this.curso;
      }
      get Grade(){
        return this.grade;
      }
      get Usuario(){
        return this.usuario;
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
      set Usuario(usuario) {
        this.usuario = usuario;
      }
    }
