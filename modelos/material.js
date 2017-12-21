"use strict";
import Entidade from './entidade';

export default class Material extends Entidade {

	@Private id;
	@Private arquivo;

	constructor(){
		super();
	}

	get Id(){
		return this.id;
	}

	set Id(id){
		this.id = id;
	}

	get Conteudo(){
		return this.conteudo;
	}

	set Conteudo(conteudo){
		this.conteudo = conteudo;
	}

	get Arquivo(){
		return this.arquivo;
	}

	set Arquivo(arquivo){
		this.arquivo = arquivo;
	}

}
