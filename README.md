Información sobre el Proyecto

Trello: https://trello.com/b/pZo8TUIM/flow

Postman collection:  https://www.getpostman.com/collections/fb1e28ec09c44e4811f4

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
Devuelve los datos de ubicación del usuario según ip-api.


/current[/city]
City es un parámetro opcional. Si se envia el nombre de una ciudad por parametro, devuelve estado del clima actual de dicha ciudad. En caso de no existir dicha ciudad, retornara un error con el mensaje correspondiente. En el caso de no enviar parametros, se retorna el estado del clima actual en la ubicacion del usuario, obtenida a a traves de la funcion 'location'.


/forecast[/city]
City es un parámetro opcional. Si se envia el nombre de una ciudad por parametro, devuelve estado del clima a 5 dias de dicha ciudad. En caso de no existir dicha ciudad, retornara un error con el mensaje correspondiente. En el caso de no enviar parametros, se retorna el estado del clima a 5 dias en la ubicacion del usuario, obtenida a a traves de la funcion 'location'.


-----------------------------------------------------------------------------

Para correr el proyecto:

1. Clonar el repositorio.
2. Crear archivo .env en la raiz del proyecto con las siguientes variables:
    - PORT=3000
    - OPEN_WEATHER_API_KEY= AGREGAR API KEY
3. Instalar dependencias con npm install.
4. Levantar el servidor con npm start.

Para correr los tests:

- npm test

