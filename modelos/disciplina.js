import Entidade from './entidade';
import Departamento from './departamento';

export default class Disciplina extends Entidade {
    @Private id;
    @Private nome;
    @Private codigo;
    @Private creditos;
    @Private livre_escolha;
    @Private departamento;

    constructor(){
        super();
        this.id = undefined;
        this.nome = undefined;
        this.codigo = undefined;
        this.creditos = undefined;
        this.livre_escolha = undefined;
        this.departamento = new Departamento();
    } 

    get getId(){
        return this.id; 
    }

    get getNome(){
        return this.nome; 
    }
    
    get getCodigo(){
        return this.codigo; 
    }
    
    get getCreditos(){
        return this.creditos;
    }

    get getLivre_escolha(){
        return this.livre_escolha;
    }

    get getDepartamento(){
        return this.departamento;
    }

    setId(id){
        this.id = id;
    }

    setNome(nome){
        if (typeof(nome) == "string") this.nome = nome;
    }

    setCodigo(codigo){
        if (typeof(codigo) == "string") this.codigo = codigo;
    }

    setCreditos(creditos){
        if (typeof(creditos) == "number") this.creditos = creditos;
    }

    setLivre_escolha(livre_escolha){
        this.livre_escolha = livre_escolha;
    }

    setDepartamento(departamento){
        this.departamento = departamento;
    }    
}
