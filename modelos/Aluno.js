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
      get getCurso(){
        return this.curso;
      }
      get getGrade(){
        return this.grade;
      }
      get getUsuario(){
        return this.usuario;
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
      setUsuario(usuario) {
        this.usuario = usuario;
      }
    }
