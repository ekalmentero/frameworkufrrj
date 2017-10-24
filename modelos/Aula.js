"use strict";

export default class Aula {

	@Private id;
	@Private turma;
	@Private data;

	constructor(id, turma, data){
		this.setId(id);
		this.setTurma(turma);
		this.setData(data);
	}

	get getData(){
		return this.data;
	}

	setId(id){
		this.id = id;
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
