[![Build Status](https://travis-ci.org/jmplz14/AlineacionBaloncesto.svg?branch=master)](https://travis-ci.org/jmplz14/AlineacionBaloncesto)
[![CircleCI](https://circleci.com/gh/jmplz14/AlineacionBaloncesto.svg?style=svg)](https://circleci.com/gh/jmplz14/AlineacionBaloncesto)
# AlineacionBaloncesto
## Descripción
El objetivo de mi proyecto será registrar las alineaciones en un partido de baloncesto y los equipos que participan. Será utilizada para poder consultar los partidos y equipos. Además también podremos obtener los partidos jugados por un jugador y el número de veces que fue titular.

## Implementación
- Lenguaje: Como lenguaje se usará javascript, concretamente usaré [Node.js](https://nodejs.org/es/), puesto que es muy bueno para microservicios. Esto se debe al uso de módulos muy pequeños para cada característica, siendo muy liviano.

- En este caso para la integración continua usaré [Travis](https://travis-ci.org/) al ser uno de los mas populares y con mas documentación.

- Para la infraestructura de la aplicación web vamos a usar [Expres.js](https://expressjs.com/es/) por ser muy rápida y flexible al usarla con nodejs

- Para la base de datos usaremos [MongoDB](https://www.mongodb.com/es) que es no relacional y ya la utilicé en otras asignaturas de la universidad. 

- Servicio de Logs: En principio pensé en el uso de la siguiente librería [express-logger-unique-req-id](https://www.npmjs.com/package/express-logger-unique-req-id), tiene una configuración muy sencilla  y nos haría gran parte del trabajo. Usa [Winston](https://www.npmjs.com/package/winston) por debajo con lo que podríamos modificar la configuración. Pero optaré por utilizar directamente Winston para adaptarlo mejor a mi proyecto y aprender a usarlo. Además Winston tiene mucha documentación de ayuda que me puede hacer falta. 

- Test: De los tres dados en la teoría de la asignatura usaré [Jasmine](https://jasmine.github.io/).

## Documentación de Integración Continua
Puede leerla [aquí](https://github.com/jmplz14/AlineacionBaloncesto/blob/master/docs/ficherosMd/IntegracionContinua.md)

