-- -----------------------------------------------------
-- LLENADO
-- -----------------------------------------------------
INSERT INTO user(user,password) VALUES ('usuario', 'contraseña');

INSERT INTO extra(id_extra,descripcion,costo) VALUES 
(null, 'Equipaje adicional', 20000),
(null, 'Comida a bordo', 30000),
(null, 'Wi-Fi a bordo', 10000),
(null, 'SIN ADICIONAL', 0);

INSERT INTO clase(id_clase,descripcion,precio) VALUES
(null, 'Económica',0),
(null, 'Ejecutiva',30000),
(null, 'Primera clase',50000);

INSERT INTO departamento(id_departamento,nombre) VALUES
(null, 'Bolivar'),(null, 'Santander'),
(null, 'Atlantico'),(null, 'Antioquia ');

INSERT INTO ciudad(id_ciudad,nombre,id_departamento) VALUES
(null, 'Cartagena',1),(null, 'Bucaramanga',2),
(null, 'Barranquilla',3),(null, 'Medellin',4);

INSERT INTO ruta(id_ruta,id_origen,id_destino,costo) VALUES
(null,1,2,10000),(null,3,4,15000),(null,1,4,20000),(null,3,2,90000);

-- -----------------------------------------------------
-- LLENADO RESERVAS
-- -----------------------------------------------------
INSERT INTO reservas(id_reserva,id_ruta,id_clase,id_extras,fecha,hora,pasajeros,costo_reserva) 
VALUES(NULL,1,2,1,'2024-06-27','10:00:00', 2,null);



