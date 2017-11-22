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

  get Nome(){
    return this.nome;
  }

  get Matricula(){
    return this.matricula;
  }

  get Id(){
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
