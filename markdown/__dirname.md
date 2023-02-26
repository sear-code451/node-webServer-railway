

## Como usar __dirname

Este como que crea un enlace más personalizado, y que por dentro ese apunte a otro, es decir, cuando nosotros escribimos en html, y lo publicamos saldrá una dirección larga, y no entendible desde ahí, nosotros podemos personalizar ese enlace, colocandole el nombre que nosotros querrámos y que muestre el mismo lugar o cosa.

EJEMPLO:
~~~
const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estático

app.use( express.static('public/back') );

app.get( '/generic', ( req, res ) => {
  res.sendFile( __dirname + '/public/back/generic.html' )
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
~~~

> De lo que podemos entender de esto es que analicemos, y lee como están funcionando, estos llamados, y darte cuenta que sin esas formas de llamarlo con el "__dirname", nos saldrá con los nombres mas largo, que uno se ve feo, nada estético y ademas es incomprensible.