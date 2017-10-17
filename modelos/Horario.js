"use strict";

export default class Horario {

	constructor(id, hora_inicio, hora_fim){
		this.id = id;
		this.hora_inicio = hora_inicio;
		this.hora_fim = hora_fim;
	}

	setId(id){
		this.id = id;
	}

	setHoraInicio(h_ini){
		this.hora_inicio = h_ini;
	}

	setHoraFim(h_fim){
		this.hora_fim = h_fim;
	}

	getId(){
		return this.id;
	}
	
	getHoraInicio(){
		return this.hora_inicio;
	}
	
	getHoraFim(){
		return this.hora_fim;
	}

}