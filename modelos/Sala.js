"use strict";

import Entidade from './entidade';

export default class Sala extends Entidade{

	@Private id;
	@Private predio;
	@Private nome;
	@Private deleted;

	constructor(){
		//
	}

	set Id(id){
		this.id = id;
	}

	set Predio(predio){
		this.predio = predio;
	}

	set Nome(nome){
		this.nome = nome;
	}

	set Deleted(deleted){
		this.deleted = deleted;
	}

	get etId(){
		return this.id;
	}

	get Predio(){
		return this.predio;
	}

	get Nome(){
		return this.nome;
	}

	get Deleted(){
		return this.deleted;
	}

}