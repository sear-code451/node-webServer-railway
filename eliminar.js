// Requerimientos
const express = require('express');
const app = express();

// Procedimiento
const port = 8080;

app.use( express.static( 'public/back' ) );

app.get( '/generico', (req, res) => {
    res.sendFile( __dirname + '/public/back/generic.html' );
} );

app.get( '/elementos', (req, res) => {
    res.sendFile( __dirname + '/public/back/elements.html' );
} );

app.get( '*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' );
} )

app.listen( port, () => {
    console.log( `El puerto ${port} esta siendo ejecutada` );
} );
