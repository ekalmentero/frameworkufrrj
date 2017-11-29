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

      get Id() {
        return this.id;
      }

      get Inicio_vigencia() {
        return this.inicio_vigencia;
      }
      get Disponivel() {
        return this.disponivel;
      }
      get Curso() {
        return this.curso;
      }

      set Id(id) {
        this.id = id;
      }
      set Inicio_vigencia(inicio_vigencia) {
        this.inicio_vigencia = inicio_vigencia;
      }
      set Disponivel(disponivel) {
        this.disponivel = disponivel;
      }
      set Curso(curso) {
        this.curso = curso;
      }


}
