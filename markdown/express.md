
# Express

### ¿ Qué es express ?
Bueno aplica lo mismo que http, la diferencia es que este nos ayuda a ahorrar más código y sea más entendible e igual ser eficiente.
En otras palabras creamos con express un servidor.


### ¿ Cómo se usa ?

Se usa de la siguiente manera:
~~~
const express = require('express');
const app = express();
~~~

- Tener muy encuenta que "app" puede ser cualquier cosa, sólo que se entiende mejor así de forma general, al igual donde dice " const express ", ya que podemos darle a eso cualquier valor.

- Aplicando esto creando un servidor, "app" es una instancia de la función "express()";

 - Ejemplo de ejericicio fácil para como usar:

~~~
    // Requerimientos
    const express = require('express');
    const app = express();

    // Procecedimiento

    const port = 8080;

    app.get( '/', ( request, response ) => {
        response.send( 'Home Page' );
    } );

    app.get( '/secondary', ( req, res ) => {
        res.send( 'Page secondary' );
    } );

    app.get( '/*', ( req, res ) => {
        res.send( '404 | Cannot not found' );
    } );

    app.listen( port, () => {
        console.log( `Estamos ejecutando el puerto número ${port}` );
    } );
~~~

- **().get :** get lo que pide es que pide la dirección de la página o enlace, en el primer parámetro, y el segundo un callback ya solo es el contenido que nosotros querramos hacer. En este caso estamos enviando como respuesta por eso "response", y que ese mensaje se escribe dentro del paréntisis y listo.

- **().listen :** Este pide primero en que puerto es donde será escuchado, y de ahí ya si queremos ejecutamos un mensaje a la consola u otras cosas más tal vez.
