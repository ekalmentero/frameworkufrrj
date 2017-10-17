"use strict";

export default class Aula {

	constructor(id=null, turma=null, data=null){
		this.id = id;
		this.turma = turma;
		this.data = data;
	}

	getData(){
		return this.data;
	}

	setId(id){
		this.id = id;
	}

	getId(){
		return this.id;
	}

	setData(data){
		this.data = data;
	}

	getTurma(){
		return this.turma;
	}

	setTurma(turma){
		this.turma = turma;
	}

}
