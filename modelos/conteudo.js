"use strict";
import Entidade from './entidade';

export default class Conteudo extends Entidade {

	@Private id;
	@Private nome;
	@Private aula;

	constructor(){
		super();
	}

	get Id(){
		return this.id;
	}

	set Id(id){
		this.id = id;
	}

	get Aula(){
		return this.aula;
	}

	set Aula(aula){
		this.aula = aula;
	}

	get Nome(){
		return this.nome;
	}

	set Nome(nome){
		this.nome = nome;
	}

}
