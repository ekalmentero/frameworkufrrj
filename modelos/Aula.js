"use strict";

import Entidade from './entidade';

export default class Aula extends Entidade{

	@Private id;
	@Private turma;
	@Private turma_id;
	@Private data;

	constructor(){
		
	}

	get Data(){
		return this.data;
	}

	setId(id){
		this.id = id;
	}

	setTurmaId(id){
		this.turma_id = id;
	}

	get TurmaId(){
		return this.turma_id;
	}

	get Id(){
		return this.id;
	}

	setData(data){
		this.data = data;
	}

	get Turma(){
		return this.turma;
	}

	setTurma(turma){
		this.turma = turma;
	}

}
