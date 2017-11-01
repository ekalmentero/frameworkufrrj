"use strict";
import Curso from './curso';
import Entidade from './entidade';

export default class Grade extends Entidade {
  @Private id;
  @Private inicio_vigencia;
  @Private disponivel;
  @Private curso = new Curso();

    constructor(){
      super();
    }

     get getId() {
        return this.id;
      }
      
      get getInicio_vigencia() {
        return this.inicio_vigencia;
      }
      get getDisponivel() {
        return this.disponivel;
      }
      get getCurso() {
        return this.curso;
      }
      
      setId(id) {
        this.id = id;
      }
      setInicio_vigencia(inicio_vigencia) {
        this.inicio_vigencia = inicio_vigencia;
      }
      setDisponivel(disponivel) {
        this.disponivel = disponivel;
      }
      setCurso(curso) {
        this.curso = curso;
      }
      

}

