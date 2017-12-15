import Entidade from './entidade';



export default class Periodo extends Entidade{
  @Private id;
  @Private data_inicio;
  @Private data_fim;
  @Private nome;
  @Private deleted;

  constructor(id,data_inicio,data_fim,nome){
    super();
    /*this.set Id(id);
    this.set DataInicio(data_inicio);
    this.set DataFim(data_fim);
    this.set Nome(nome);*/
  }
  get DataInicio(){
    return this.data_inicio;
  }

  get DataFim(){
    return this.data_fim;

  }

  get Nome(){
    return this.nome;
  }

  get Deleted(){
    return this.deleted;
  }

  get Id(){
    return this.id;
  }

  set DataInicio(data_inicio){
    this.data_inicio=data_inicio;
}

set DataFim(data_fim){
  this.data_fim=data_fim;
}

set Nome(nome){
  this.nome=nome;
}

set Deleted(deleted){
  this.deleted=deleted;
}

set Id(id){
  this.id=id;
}

}
