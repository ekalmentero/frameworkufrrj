"use strict";
export class Grade{

    Constructor(id, inicioVigencia, disponivel, deleted){
        this.id = id;
        this.inicioVigencia = inicioVigencia;
        this.disponivel = disponivel;
        this.deleted = deleted;
    }
     getId() {
        return this.id;
      }
      
      getinicioVigencia() {
        return this.inicioVigencia;
      }
      getdisponivel() {
        return this.disponivel;
      }

      getDeleted() {
        return this.deleted;
      }
      
      setId(id) {
        this.id = id;
      }
      setinicioVigencia(inicioVigencia) {
        this.inicioVigencia = inicioVigencia;
      }
      setDisponivel(disponivel) {
        this.disponivel = disponivel;
      }
      setDeleted(deleted) {
        this.deleted = deleted;
      }
      

}

