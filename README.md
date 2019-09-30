# AlineacionBaloncesto
## Descripción

Se pedirá mediante un formulario web las siguientes datos:
- Nombre de cada jugador (5 jugadores seleccionados de entre una base de datos).
- Posición de cada jugar (Alero, pivot, base... almacenados en una base de datos).
- Lista de correos electrónicos a los que enviar la imagen.

Con estos datos nuestro micro servicio se encargara de realizar una imagen parecida a [esta](https://s04.s3c.es/imag3/baloncesto2014/alineacion/espana.gif), en la que cada jugador aparezca en la posición correspondiente de la alineación junto a su nombre y foto. Esta imagen sera envida a la lista de correos que se pedirá en el formulario web. De esta forma se podrá enviar la alineación de un equipo de baloncesto a varios medios de prensa.
## Implementación
- Lenguaje: Para la implementación usaremos python y la librería pillow que nos permitirá crear la imagen de la alineación y meter los nombres de los jugadores. Aparte la imagen sera enviada al correo dado por el usuario mediante otra librería de python llamada smtplib. Para la parte web utilizare django.


- Integración continua: En este caso usare travis al ser uno de los mas populares y con mas documentación.
- Entorno virtual: De momento estoy usando anaconda pero me estoy planteando el cambio a [pipenv](https://pipenv-es.readthedocs.io/es/latest/) al tener bastante documentación, que me ayudara a la hora de aprender a utilizarlo y me parece mas flexible.
- Test: En principio para los test tengo pensado utilizar unittest que fue explicado en la semana 3. Pero me he estado informando también de [pytest](https://docs.pytest.org/en/latest/contents.html) y aun no estoy totalmente seguro de cual de los dos utilizar.
- Servicio de Logs: En principio usaria [logging](https://realpython.com/python-logging/#the-logging-module)

- Almacenamiento: Para el almacenamiento de las imágenes, jugadores y posiciones usaremos una base de datos de mongodb

El resto de apartados aun no he decido cual utilizare por falta de conocimientos de su uso. Tendré que ir mirandolo en las siguientes semanas.
