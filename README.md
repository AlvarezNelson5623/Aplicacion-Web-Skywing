# Proyecto SkyWing
Proyecto sobre Aereolinea Comercial realizada en REACT.

## Colaboradores Proyecto (100% - Participativos )
Nelson Ivan Alvarez Suarez – 2215002 ||
 Jonathan Philippe Parra Duran – 2224509 ||
 Leider Joanny Esteban Lozano – 2215003  ||
 Brandon David Jaimes Castro – 2211859 ||

## Base de datos - Use Xampp

### Start Apache | Start MySQL -> admin 
### `Crear Usuario` -> host: "localhost", user: "admin", password: "147258369", database: "skywing" (Todos los Privilegios globales)
### `Import DB` -> use skywing.sql (asegurese de que la DB se asociará al usuario creado) -> ir al servidor (Servidor: 127.0.0.1) -> cuentas de usario (user 'admin') -> Bases de datos  -> "Añadir privilegios a la o las base de datos siguientes:" - "skywing" (continuar -> seleccionar todo -> continuar) 
### `Datos predeterminados BD` -> use llenado.sql (seccion sql, ejecute insert por separado)

## Instrucciones para Correcta Ejecución - Client (FRONTEND)
Asegurese de estar en la ruta correcta (sobre la carpeta Client)

### `Instalar modulos de REACT`
#### npm install react react-dom 
### `Instalar react-bootstrap`
#### npm install react-bootstrap bootstrap
#### npm install --save sweetalert2 sweetalert2-react-content
### `Ejecutar Client`
#### npm start

## Instrucciones para Correcta Ejecución - Server (BACKEND)
Asegurese de estar en la ruta correcta (sobre la carpeta Server)
### `Instalar modulos`
#### npm install
#### npm install mysql express
#### npm install cors
### `Ejecutar Server`
#### node index.js

## Login
### `Credenciales`
#### user : 'usuario'
#### password : 'contraseña'
### `Nota`
#### La pestaña Reservas es de tipo privada, por lo que necesita del login para tener acceso a la misma. 
