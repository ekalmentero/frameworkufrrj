import Entidade from './entidade';



export default class Professor extends Entidade {
  @Private id;
  @Private nome;
  @Private matricula;
  @Private departamento_id;

  constructor() {
    super();
    //this.set Nome(nome);
    //this.set Matricula(matricula);
  }

  get Nome(){
    return this.nome;
  }

  get Matricula(){
    return this.matricula;
  }

  get Id(){
    return this.id;
  }

  set Nome(nome){
    this.nome=nome;
  }

  set Matricula(matricula){
    this.matricula=matricula;
  }

  set Id(id){
    this.id=id;
  }
}
