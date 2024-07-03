 
-- -----------------------------------------------------
-- Schema skywing
-- -----------------------------------------------------
CREATE DATABASE skywing;
USE skywing;

-- -----------------------------------------------------
-- Table departamento
-- -----------------------------------------------------
CREATE TABLE  departamento (
  id_departamento INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  PRIMARY KEY (id_departamento));


-- -----------------------------------------------------
-- Table ciudad
-- -----------------------------------------------------
CREATE TABLE  ciudad (
  id_ciudad INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  id_departamento INT(11) NOT NULL,
  PRIMARY KEY (id_ciudad),
  CONSTRAINT ciudad_ibfk_1
    FOREIGN KEY (id_departamento)
    REFERENCES departamento (id_departamento)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table ruta
-- -----------------------------------------------------
CREATE TABLE ruta (
  id_ruta INT NOT NULL AUTO_INCREMENT,
  id_origen INT(11) NOT NULL,
  id_destino INT(11) NOT NULL,
  costo DOUBLE NOT NULL,
  PRIMARY KEY (id_ruta),
  CONSTRAINT fk_ruta_ciudad
    FOREIGN KEY (id_origen)
    REFERENCES ciudad (id_ciudad)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_ruta_ciudad1
    FOREIGN KEY (id_destino)
    REFERENCES ciudad (id_ciudad)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table clase
-- -----------------------------------------------------
CREATE TABLE  clase (
  id_clase INT(11) NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(60) NOT NULL,
  precio DOUBLE NOT NULL,
  PRIMARY KEY (id_clase));


-- -----------------------------------------------------
-- Table extra
-- -----------------------------------------------------
CREATE TABLE  extra (
  id_extra INT(11) NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(60) NOT NULL,
  costo DOUBLE NOT NULL,
  PRIMARY KEY (id_extra));


-- -----------------------------------------------------
-- Table reservas
-- -----------------------------------------------------
CREATE TABLE  reservas (
  id_reserva INT(11) NOT NULL AUTO_INCREMENT,
  id_ruta INT NOT NULL,
  id_clase INT(11) NOT NULL,
  id_extras INT(11) NOT NULL,
  fecha VARCHAR(11) NOT NULL,
  hora TIME NOT NULL,
  pasajeros INT(11) NOT NULL,
  costo_reserva INT NOT NULL,
  PRIMARY KEY (id_reserva),
  CONSTRAINT reservas_ibfk_3
    FOREIGN KEY (id_clase)
    REFERENCES clase (id_clase)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT reservas_ibfk_4
    FOREIGN KEY (id_extras)
    REFERENCES extra (id_extra),
  CONSTRAINT fk_reservas_ruta1
    FOREIGN KEY (id_ruta)
    REFERENCES ruta (id_ruta)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table user
-- -----------------------------------------------------
CREATE TABLE  user (
  user VARCHAR(11) NOT NULL,
  password VARCHAR(60) NOT NULL,
  PRIMARY KEY (user));
