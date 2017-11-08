"use strict";

import Entidade from './entidade';

export default class Conteudo extends Entidade {

	@Private id;
	@Private nome;
	@Private aula;

	constructor(){
    super();
  }

	get getId(){
		return this.id;
	}

	setId(id){
		this.id = id;
	}

	get getAula(){
		return this.aula;
	}

	setAula(aula){
		this.aula = aula;
	}

	get getNome(){
		return this.nome;
	}

	setNome(nome){
		this.nome = nome;
	}

}
