
# Usando en páginas estáticas express:

~~~
const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estático
app.use( express.static('public/back') );

app.get('/hola-mundo', (req, res) => {
  res.send('ruta específica llamada "hola-mundo" ')
});

app.get( '*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html' );
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
~~~

Con este ejemplo nos podemos dar cuenta, de que aplicamos lo mismo, la diferencia, es que le decimos que queremos usar una página estática y con su nombre que es identificado dentro de nuestros archivos.

~~~
app.use( express.static('public/back') );
~~~

**¿Qué hace lo de arriba?:** lo que hace es como dijimos antes este, es la línea que indica que página mirar y que sea una página estática como html, y bueno indicando su respectiva dirección.