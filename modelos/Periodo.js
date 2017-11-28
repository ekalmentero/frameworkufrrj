import Entidade from './entidade';



export default class Periodo extends Entidade{
  @Private id;
  @Private data_inicio;
  @Private data_fim;
  @Private nome;
  @Private deleted;

  constructor(){
    super();
    /*this.setId(id);
    this.setDataInicio(data_inicio);
    this.setDataFim(data_fim);
    this.setNome(nome);*/
  }
  get getData_inicio(){
    return this.data_inicio;
  }

  get getData_fim(){
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

  set Data_inicio(data_inicio){
    this.data_inicio=data_inicio;
  }

  set Data_fim(data_fim){
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
