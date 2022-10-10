Información sobre el Proyecto

Trello: https://trello.com/ AGREGAR TRELLO

Postman collection:  AGREGAR COLLECTION

Desarrollado sobre Node.js usando JavaScript.
Se implementa una API que provee en formato JSON el estado del tiempo basado en
diferentes endpoints.
Se utiliza servicio API de weather Open Weather Map.
Se realizan tests con la Jest.
Se intenta obtener  IP de usuario con las librerias IP (https://www.npmjs.com/package/ip) y request-ip (https://www.npmjs.com/package/request-ip), pero en ambos casos se obtiene una IP privada ( 192.168.XXX.X ), con la cual no es posible obtener la latitud y longitud con ip-api.

--------------------------------------------------------------------------------------------------

ENDPOINTS:
Ruta base
/v1


/location
Devuelve los datos de ubicación city según ip-api.


/current[/city]
City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación
actual según ip-api y el estado del tiempo actual.


/forecast[/city]
City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación
actual según
ip-api y el estado del tiempo a 5 días.