"use strict";

import Entidade from './entidade';

export default class Instituto extends Entidade{

	@Private id;
	@Private sigla;
	@Private nome;
	@Private predios;

	// constructor(){
	//
	// }

	set Predios(sigla){
		this.predios = predios;
	}

	get Predios(){
		return this.predios;
	}

	set Sigla(sigla){
		this.sigla = sigla;
	}

	get Sigla(){
		return this.sigla;
	}

	set Nome(nome){
		this.nome = nome;
	}

	get Nome(){
		return this.nome;
	}

	set Id(id){
		this.id = id;
	}

	get Id(){
		return this.id;
	}

}
