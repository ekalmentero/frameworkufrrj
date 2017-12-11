import Entidade from './entidade';



export default class Periodo extends Entidade{
  @Private id;
  @Private data_inicio;
  @Private data_fim;
  @Private nome;
  @Private deleted;

  constructor(){
    super();
    this.id=undefined;
    this.data_inicio=undefined;
    this.data_fim=undefined;
    this.nome=undefined;
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

setDataInicio(data_inicio){
    this.data_inicio=data_inicio;
}

setDataFim(data_fim){
  this.data_fim=data_fim;
}

setNome(nome){
  this.nome=nome;
}

setDeleted(deleted){
  this.deleted=deleted;
}

setId(id){
  this.id=id;
}

}
