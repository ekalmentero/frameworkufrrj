import Entidade from './entidade';
import Departamento from './departamento';



export default class Professor extends Entidade {
  @Private id;
  @Private nome;
  @Private matricula;
  @Private departamento= new Departamento();

  constructor() {
    super();
    this.nome=undefined;
    this.matricula=undefined;
    this.id=undefined;
    this.departamento= new Departamento();
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

  set nome(nome){
    this.nome=nome;
  }

  set matricula(matricula){
    this.matricula=matricula;
  }

  set id(id){
    this.id=id;
  }
}
