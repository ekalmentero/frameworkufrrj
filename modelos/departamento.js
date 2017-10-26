import Entidade from './entidade';

export default class Departamento extends Entidade {

    @Private id;
    @Private nome;
    @Private instituto_id;
    @Private deleted;
    @Private sigla;

    constructor(){
        super();
    }

    get getId(){
        return this.id;
    }

    get getNome(){
        return this.nome;
    }

    get getDeleted(){
        return this.deleted;
    }

    setId(id){
        this.id = id;
    }

    setNome(nome){
        if (typeof(nome) == "string") this.nome = nome;
    }

    setInstituto_id(instituto_id){
        if (typeof(instituto_id) == "number") this.instituto_id = instituto_id;
    }

    setDeleted(deleted){
        if (typeof(deleted) == "number") this.deleted = deleted;
    }

    setSigla(sigla){
        if (typeof(sigla) == "string") this.sigla = sigla;
    }

}
