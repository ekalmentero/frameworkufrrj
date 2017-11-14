"use strict";
import Entidade from './entidade';
export default class Aluno extends Entidade{
  @Private id;
  @Private nome;
  @Private matrcula;
  @Private ativo;
  @Private ingresso;

    constructor(){
      super();
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
    }
