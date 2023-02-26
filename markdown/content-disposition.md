
# Content-disposition:

Bueno una explicación de lo aprendido debido que, no sabemos cual es su alcance de los parámetros:

~~~
    response.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );

     response.writeHead(200, {'Content-Type': 'application/csv'});
~~~

> Esto hará que nuestro código que mandemos a descargar, el que manda a descargar es el "application/csv", y el otro código de arriba dice que hagamos conexión y adjuntemos a ese archivo un nombre de "lista.csv"

**RESUMEN:** el primer código hace que adjunte el archivo .csv con un nombre que será "lista.csv" y listo porque si sólo colocamos el segundo código sin el primero ese archivo mandará a descargar y no tendrá un nombre en específico.