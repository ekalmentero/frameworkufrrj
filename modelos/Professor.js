import Entidade from './entidade';



export default class Professor extends Entidade {
  @Private id;
  @Private nome;
  @Private matricula;
  @Private departamento_id;

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

  setNome(nome){
    this.nome=nome;
  }

  setMatricula(matricula){
    this.matricula=matricula;
  }

  setId(id){
    this.id=id;
  }
}
