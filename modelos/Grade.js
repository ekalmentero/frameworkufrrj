"use strict";
import Curso from 'Curso';
export default class Grade{
  @Private id;
  @Private inicio_vigencia;
  @Private disponivel;
  //@Private curso_id;
  @Private curso = new Curso();

    Constructor(){
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
      get getCurso_id() {
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

