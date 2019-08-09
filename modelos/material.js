"use strict";

export default class Material {

	constructor(ir, arquivo, conteudo){
		this.set Id = id;
		this.set Arquivo = arquivo;
		this.set Conteudo = conteudo;
	}

	get getId(){
		return this.id;
	}

	set Id(id){
		this.id = id;
	}

	get getConteudo(){
		return this.conteudo;
	}

	set Conteudo(conteudo){
		this.conteudo = conteudo;
	}

	get getArquivo(){
		return this.arquivo;
	}

	set Arquivo(arquivo){
		this.arquivo = arquivo;
	}

}