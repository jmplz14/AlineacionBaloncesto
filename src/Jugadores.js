const fs = require('fs')
/**
  * @class Jugador
  * @description Se usa para almacenar la información de un jugador.
*/
class Jugador {
        /**
         * Crear equipo.
         * @param {String} nombre Nombre del jugador.
         * @param {Int} dorsal Dorsal que utiliza el jugador.
         */
	constructor(nombre, dorsal) {
        this.nombre = nombre;
        this.dorsal = dorsal;
	}


}

module.exports = Jugador;