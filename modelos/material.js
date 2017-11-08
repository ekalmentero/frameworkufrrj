"use strict";

import Entidade from './entidade';

export default class Conteudo extends Entidade {

	@Private id;
	@Private arquivo;
	@Private conteudo;

	constructor(){
    super();
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
