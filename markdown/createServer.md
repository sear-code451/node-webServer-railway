
## Cómo usar http.createServer

~~~
const http = require('http');

http.createServer( ( request, response ) => {

} );

~~~

> Entender que esos 2 del callback, no son obligatorio con esos nombres, puede variar según a lo que nosotros querramos colocar.

- request: el primer parámetro que en el ejemplo es llamado como "request", es lo que están solicitando por parte del cliente.

- response: es lo que el servidor le va responder al cliente.