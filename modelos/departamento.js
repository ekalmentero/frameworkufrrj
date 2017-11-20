import Entidade from './entidade';
import Instituto from './Instituto';

export default class Departamento extends Entidade {

    @Private id;
    @Private nome;
    @Private instituto_id;
    @Private deleted;
    @Private sigla;
    @Private instituto;

    constructor(){
        super();
        this.id = undefined;
        this.nome = undefined;
        this.sigla = undefined;
        this.deleted = undefined;
        this.instituto_id = undefined;
        this.instituto = new Instituto();
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

    get getInstituto(){
        return this.instituto;
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

    setInstituto(instituto){
        this.instituto = instituto;
    }

    setDeleted(deleted){
        if (typeof(deleted) == "number") this.deleted = deleted;
    }

    setSigla(sigla){
        if (typeof(sigla) == "string") this.sigla = sigla;
    }

}
