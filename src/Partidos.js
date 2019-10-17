const fs = require('fs')

class Partido {

	constructor(idPartido, local, titularesLocales, visitante, titularesVisitantes, numCuartos, listaCambios ) {
		this.idPartido = idPartido;
		this.local = local;
		this.titularesLocales = titularesLocales;
		this.visitante = visitante;
		this.titularesVisitantes = titularesVisitantes;
		this.numCuartos = numCuartos;
		this.listaCambios = listaCambios;

	}


}

module.exports = Partidos;