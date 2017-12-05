

export default class Departamento {

    @Private id;
    @Private nome;
    @Private instituto;
    @Private deleted;
    @Private sigla;

    constructor(){
        this.id = null;
        this.nome = "";
        this.sigla = "";
        this.deleted = 0;
        this.instituto = null;
    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    getDeleted(){
        return this.deleted;
    }

    getSigla(){
        return this.sigla;
    }

    setId(id){
        this.id = id;
    }

    setNome(nome){
        this.nome = nome;
    }

    setInstituto(instituto){
        this.instituto = instituto;
    }

    setDeleted(deleted){
       this.deleted = deleted;
    }

    setSigla(sigla){
       this.sigla = sigla;
    }

    fillFromObject(obj){
       
        if(obj.instituto !== undefined)
            this.setInstituto(obj.instituto)
        
        if(obj.id !== undefined)
            this.setId(obj.id)
        
        if(obj.sigla !== undefined)
            this.setSigla(obj.sigla)
        
        if(obj.nome !== undefined)
            this.setNome(obj.nome)
        
        if(obj.deleted !== undefined)
            this.setDeleted(obj.deleted)

        return this;
    }

}