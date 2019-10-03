# AlineacionBaloncesto
## Descripción
El objetivo de mi proyecto sera registrar las alineaciones en un partido de baloncesto. Sera usada para poder obtener cuantos minutos juega cada jugador. Para poder realizar esto tendremos que registrar equipos y jugadores, necesitaremos poder iniciar y finalizar partidos entre dos equipos y registrar cambios de jugadores durante el partido. 

## Implementación
- Lenguaje: Para la implementación usaremos python y la librería pillow que nos permitirá crear la imagen de la alineación y meter los nombres de los jugadores. Aparte la imagen sera enviada al correo dado por el usuario mediante otra librería de python llamada smtplib. Para la parte web utilizare django.


- Integración continua: En este caso usare travis al ser uno de los mas populares y con mas documentación.
- Entorno virtual: De momento estoy usando anaconda pero me estoy planteando el cambio a [pipenv](https://pipenv-es.readthedocs.io/es/latest/) al tener bastante documentación, que me ayudara a la hora de aprender a utilizarlo y me parece mas flexible.
- Test: En principio para los test tengo pensado utilizar unittest que fue explicado en la semana 3. Pero me he estado informando también de [pytest](https://docs.pytest.org/en/latest/contents.html) y aun no estoy totalmente seguro de cual de los dos utilizar.
- Servicio de Logs: En principio usaría [logging](https://realpython.com/python-logging/#the-logging-module)

- Almacenamiento: Para el almacenamiento de las imágenes, jugadores y posiciones usaremos una base de datos de mongodb

El resto de apartados aun no he decido cual utilizare por falta de conocimientos de su uso. Tendré que ir mirándolo en las siguientes semanas.
