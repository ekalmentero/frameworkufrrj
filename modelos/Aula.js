"use strict";

import Entidade from './Entidade';

export default class Aula extends Entidade{

	@Private id;
	@Private turma;
	@Private turma_id;
	@Private data;

	constructor(){
		
	}

	get getData(){
		return this.data;
	}

	setId(id){
		this.id = id;
	}

	setTurmaId(id){
		this.turma_id = id;
	}

	get getTurmaId(){
		return this.turma_id;
	}

	get getId(){
		return this.id;
	}

	setData(data){
		this.data = data;
	}

	get getTurma(){
		return this.turma;
	}

	setTurma(turma){
		this.turma = turma;
	}

}
