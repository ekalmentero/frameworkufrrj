"use strict";

export default class Material {

	constructor(ir, arquivo, conteudo){
		this.setId = id;
		this.setArquivo = arquivo;
		this.setConteudo = conteudo;
	}

	get getId(){
		return this.id;
	}

	setId(id){
		this.id = id;
	}

	get getConteudo(){
		return this.conteudo;
	}

	setConteudo(conteudo){
		this.conteudo = conteudo;
	}

	get getArquivo(){
		return this.arquivo;
	}

	setArquivo(arquivo){
		this.arquivo = arquivo;
	}

}