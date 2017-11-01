import Entidade from './entidade';



export default class Periodo extends Entidade{
  @Private id;
  @Private data_inicio;
  @Private data_fim;
  @Private nome;
  @Private deleted;

  constructor(id,data_inicio,data_fim,nome){
    super();
    /*this.setId(id);
    this.setDataInicio(data_inicio);
    this.setDataFim(data_fim);
    this.setNome(nome);*/
  }
  get getDataInicio(){
    return this.data_inicio;
  }

  get getDataFim(){
    return this.data_fim;

  }

  get getNome(){
    return this.nome;
  }

  get getDeleted(){
    return this.deleted;
  }

  get getId(){
    return this.id;
  }

  set setDataInicio(data_inicio){
    this.data_inicio=data_inicio;
}

set setDataFim(data_fim){
  this.data_fim=data_fim;
}

set setNome(nome){
  this.nome=nome;
}

set setDeleted(deleted){
  this.deleted=deleted;
}

set setId(id){
  this.id=id;
}

}
