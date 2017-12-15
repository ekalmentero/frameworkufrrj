"use strict";

import Entidade from './entidade';

export default class Horario extends Entidade{
	
	@Private id;
	@Private hora_inicio;
	@Private hora_fim;

	constructor(id, hora_inicio, hora_fim){
		this.set Id(id);
		this.set HoraInicio(hora_inicio);
		this.set HoraFim(hora_fim);
	}

	set Id(id){
		this.id = id;
	}

	set HoraInicio(h_ini){
		this.hora_inicio = h_ini;
	}

	set HoraFim(h_fim){
		this.hora_fim = h_fim;
	}

	get Id(){
		return this.id;
	}
	
	get HoraInicio(){
		return this.hora_inicio;
	}
	
	get HoraFim(){
		return this.hora_fim;
	}

}