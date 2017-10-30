import Entidade from './entidade';

export default class Presenca extends Entidade {
    @Private aula_id;
    @Private aluno_id;
    @Private tipo_presenca_id;
    @Private descricao_justificativa;
    @Private arquivo_justificativa;

    constructor(){
        super();
    } 

    get getAula_id(){ 
        return this.aula_id;
    }

    get getAluno_id(){
        return this.aluno_id;
    }

    get getTipo_presenca_id(){
        return this.tipo_presenca_id;
    }

    get getDescricao_justificativa(){
        return this.descricao_justificativa;
    }

    get getArquivo_justificativa(){
        return this.arquivo_justificativa;
    }


    setAula_id(aula_id){
        this.aula_id = aula_id;
    }

    setAluno_id(aluno_id){ 
        this.aluno_id = aluno_id;
    }

    setTipo_presenca_id(tipo_presenca_id){
        this.tipo_presenca_id = tipo_presenca_id;
    }

    setDescricao_justificativa(descricao_justificativa){
        if (typeof(descricao_justificativa) == "string") this.descricao_justificativa = descricao_justificativa;
    }

    setArquivo_justificativa(arquivo_justificativa){ 
        if (typeof(arquivo_justificativa) == "string") this.arquivo_justificativa = arquivo_justificativa;
    }
}