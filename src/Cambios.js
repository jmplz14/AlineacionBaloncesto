/**
  * @class Cambio
  * @description Se usa para almacenar los datos necesarios para representar un cambio.
*/
const fs = require('fs')
class Cambio {
        /**
         * Crear cambio.
         * @param {String} equipo Sera un string que contendrá "l" si es del equipo local y "v" si es el visitante..
         * @param {Int} cambiado Dorsal del jugador cambiado.
         * @param {Int} sustituto Dorsal del jugador que entre al campo.
         * @param {String} minuto Minuto en el que se realiza el cambio con el formato minuto:segundo.
         * @param {Int} cuarto Cuarto en el que se realiza el cambio.
         */
	constructor(equipo, cambiado, sustituto, minuto, cuarto) {
        this.equipo = equipo;
        this.cambiado = cambiado;
        this.sustituto = sustituto;
        this.minuto = minuto;
        this.cuarto = cuarto;
	}


}
module.exports = Cambio;