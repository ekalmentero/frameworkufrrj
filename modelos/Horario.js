"use strict";

import Entidade from './entidade';

export default class Horario extends Entidade{
	
	@Private id;
	@Private hora_inicio;
	@Private hora_fim;

	constructor(id, hora_inicio, hora_fim){
		super();
		this.setId(id);
		this.setHoraInicio(hora_inicio);
		this.setHoraFim(hora_fim);
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

	get getId(){
		return this.id;
	}
	
	get getHoraInicio(){
		return this.hora_inicio;
	}
	
	get getHoraFim(){
		return this.hora_fim;
	}

}