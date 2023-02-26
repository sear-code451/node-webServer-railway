
# Protocolo HTTP

[Presionar aquí al enlace del contenido de abajo](https://www.tutorialesprogramacionya.com/javascriptya/nodejsya/detalleconcepto.php?codigo=5#:~:text=-%20M%C3%B3dulo%20http%20Un%20m%C3%B3dulo%20fundamental%20para%20implementar,para%20una%20mayor%20eficiencia%20en%20las%20conexiones%20web.)

Lo primero que haremos es repasar el funcionamiento de este protocolo tan importante en Internet.
HTTP (HyperText Transfer Procolol) o (Protocolo de transferencia de hipertexto) permite la transferencia de datos entre un servidor web y normalmente un navegador.

Cuando accedemos a un sitio web desde un navegador escribimos entre otras cosas:

~~~
http://host[:puerto][/ruta y archivo][?parámetros]
http (indica el protocolo que utilizamos para conectarnos con un servidor web)
host (es el nombre del dominio por ej. google.com.ar)
puerto (es un número que generalmente no lo disponemos ya que por defecto el protocolo http utiliza el nro 80, salvo que nuestro servidor escuche peticiones en otro puerto que ya en este caso si debemos indicarlo)
[/ruta y archivo] (indica donde se encuentra el archivo en el servidor)
?parámetros (datos que se pueden enviar desde el cliente para una mayor identificación del recurso que solicitamos)
Desde el navegador parte el pedido y el servidor tiene por objetivo responder a esa petición.
~~~