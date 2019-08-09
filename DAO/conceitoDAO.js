"use strict";
import BD from "../BD";

export default class ConceitoDAO {

  static async read(conceito) {
    try {
      var retorno = await BD.buscar(conceito);
      conceito.setTipo(retorno[0].tipo);
      conceito.setId(retorno[0].id);

      return conceito;
    } catch (error) {
      return error.message;
    }
  }

  static async readAll() {
    return await BD.query("SELECT * FROM conceito");
  }

}
