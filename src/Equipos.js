const fs = require('fs')
class Equipo {

	constructor(idEquipo, nombre, listaJugadores) {
        this.idEquipo = idEquipo;
        this.nombre = nombre;
        this.listaJugadores = listaJugadores;
	}


}
module.exports = Equipo;