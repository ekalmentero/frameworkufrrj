import Entidade from './entidade';



export default class Professor extends Entidade {
  @Private id;
  @Private nome;
  @Private matricula;

  constructor() {
    super();
    //this.setNome(nome);
    //this.setMatricula(matricula);
  }

  get getNome(){
    return this.nome;
  }

  get getMatricula(){
    return this.matricula;
  }

  get getId(){
    return this.id;
  }

  set setNome(nome){
    this.nome=nome;
  }

  set setMatricula(matricula){
    this.matricula=matricula;
  }

  set setId(id){
    this.id=id;
  }
}
