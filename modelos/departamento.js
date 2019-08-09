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

    set Id(id){
        this.id = id;
    }

    set Nome(nome){
        if (typeof(nome) == "string") this.nome = nome;
    }

    set Instituto_id(instituto_id){
        if (typeof(instituto_id) == "number") this.instituto_id = instituto_id;
    }

    set Deleted(deleted){
        if (typeof(deleted) == "number") this.deleted = deleted;
    }

    set Sigla(sigla){
        if (typeof(sigla) == "string") this.sigla = sigla;
    }

}
