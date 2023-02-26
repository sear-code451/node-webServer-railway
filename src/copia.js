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

app.get( '*', ( req, res ) => {
    res.send( '404 | Cannot not found' );
} );

app.listen( port, () => {
    console.log( `Estamos ejecutando el puerto número ${port}` );
} );


