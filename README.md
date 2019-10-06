# AlineacionBaloncesto
## Descripción
El objetivo de mi proyecto sera registrar las alineaciones en un partido de baloncesto. Sera usada para poder obtener cuantos minutos juega cada jugador. Necesitaremos poder iniciar y finalizar partidos entre dos equipos y registrar cambios de jugadores durante el partido. 

## Implementación
- Lenguaje: Como lenguaje he optado por nodejs, puesto que es un lenguaje muy bueno para microservicios. Esto se debe al uso de módulos muy pequeños para cada característica, siendo muy liviano.

- En este caso para la integración continua usare [travis](https://travis-ci.org/) al ser uno de los mas populares y con mas documentación.

- Para la infraestructura de la aplicación web vamos a usar [Expres.js](https://expressjs.com/es/) por ser muy rápida y flexible al usarla con nodejs

- Para la base de datos usaremos [mongoDB](https://www.mongodb.com/es) que es relacional y ya la utilicé en otras asignaturas de la universidad. 

- Servicio de Logs: En principio pensé en el uso de la siguiente librería [express-logger-unique-req-id](https://www.npmjs.com/package/express-logger-unique-req-id), tiene una configuración muy sencilla  y nos haría gran parte del trabajo. Usa winston por debajo con lo que podríamos modificar la configuración. Pero optare por utilizar directamente [Winston](https://www.npmjs.com/package/winston) para adaptarlo mejor a mi proyecto y aprender a usarlo. Ademas winston tiene mucha documentación de ayuda que me puede hacer falta. 

- Test: De los tres dados en la teoría de la asignatura usare [Jasmine](https://jasmine.github.io/).
