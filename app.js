
// Requerimientos
require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

// Procedimiento
const app = express();
const port = process.env.PORT;
const datos = {
  nombre: 'Pablo rueda',
  titulo: 'Curso de Node'
};

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Servir contenido estático
app.use( express.static( 'public' ) );

// express HBS
app.get( '/', ( req, res ) => {
  res.render( 'enlaces/home', datos );
} );

app.get( '/generic', (req, res) => {
  res.render('enlaces/generic', datos);
} );

app.get('/elements', (req, res) => {
  res.render( 'enlaces/elements', datos );
});

app.get( '*', (req, res) => {
  res.sendFile( __dirname + '/public/back/404.html' );
} );

app.listen(port, () => {
    console.log(`Ejecutando el puerto ${port}`)
});