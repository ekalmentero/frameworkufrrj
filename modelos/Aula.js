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

	set Id(id){
		this.id = id;
	}

	set TurmaId(id){
		this.turma_id = id;
	}

	get TurmaId(){
		return this.turma_id;
	}

	get Id(){
		return this.id;
	}

	set Data(data){
		this.data = data;
	}

	get Turma(){
		return this.turma;
	}

	set Turma(turma){
		this.turma = turma;
	}

}
