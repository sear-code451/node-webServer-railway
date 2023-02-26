
const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estático

app.use( express.static('public/back') );

app.get( '/generic', ( req, res ) => {
  res.sendFile( __dirname + '/public/back/generic.html' )
} )

app.get( '/elements', (req, res) => {
  res.sendFile( __dirname + '/public/back/elements.html' );
} )

app.get( '*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html' );
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
