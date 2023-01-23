# Proyecto-Final-Modulo-3
LEVANTAR PROYECTO

ESTIMADO INGENIERO GRACIAS POR LA COMPRENSION EN EL PLAZO DE ENTREGA DEL PROYECTO
ASIMISMO QUIERO COMUNICARLE QUE TRABAJE CON MYSQL YA QUE CON POSTGRESQL TUVO ALGUNOS PROBLEMAS.

Describo a continuacion los pasos que se debe seguir para levantar el proyecto

1. Instalar Node.js
3. Instar express
5. Instalar Mysql(xampp)
6. Para un mejor manejo del API REST, instalar el complemento REST client para vsCode:
 
//Listar
###
GET http://localhost:3000/usuario HTTP/1.1

//Insertar
###
POST http://localhost:3000/usuario HTTP/1.1
Content-Type: application/json

{
    "nombre": "Paola Flores",
    "edad": 39
}

//Eliminar
###
DELETE http://localhost:3000/usuario/3 HTTP/1.1

//Promedio
###
GET http://localhost:3000/usuario/promedio HTTP/1.1

//Estatus
###
GET http://localhost:3000/usuario/status HTTP/1.1

