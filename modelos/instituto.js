export default class Instituto{
    @Private id;
    @Private sigla;
    @Private nome;

    constructor(sigla,nome){
        this.setSigla(sigla);
        this.setNome(nome);
    }

    setId(id){this.id = id}
    setSigla(sigla){this.sigla = sigla}
    setNome(nome){this.nome = nome}

    get getId(){return this.id}
    get getNome(){return this.nome}
    get getSigla(){return this.sigla}
}
