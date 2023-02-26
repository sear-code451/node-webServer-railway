
const http = require('http');

http.createServer( ( request, response ) => {

    // console.log( request );
    
    response.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
    response.writeHead(200, {'Content-Type': 'application/csv'});

    response.write( 'id nombre\n' );
    response.write( '1 Fernando\n' );
    response.write( '2 María\n' );
    response.write( '3 Juan\n' );

    response.end();

} )
.listen( 8080 );

console.log( 'Escuchando el puerto', 8080 );