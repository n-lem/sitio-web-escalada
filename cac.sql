DROP DATABASE IF EXISTS paginaDeEscalada;

-- Creo la base de datos (BD) para la plataforma
CREATE DATABASE paginaDeEscalada;

-- Selecciono para utilizar la BD recién creada
USE paginaDeEscalada;
-- Creo las tablas

-- Tabla de destinos
CREATE TABLE destinos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  dificultad ENUM('Fácil', 'Intermedio', 'Difícil', 'Experto') NOT NULL,
  ubicacion text,
  imagen VARCHAR(100)
);

-- Tabla de productos
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  imagen varchar(100)
);

-- Tabla sobre-nosotros
CREATE TABLE sobre_nosotros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(20) NOT NULL,
  apellido VARCHAR(20) NOT NULL,
  rol VARCHAR(30) NOT NULL,
  descripcion TEXT,
  contacto text,
  imagen varchar(100)
);

INSERT INTO destinos (nombre, descripcion, dificultad, ubicacion, imagen) VALUES
('Aconcagua', "Conocé la montaña más alta del hemisferio sur.",'Intermedio',"https://www.google.com/maps/d/u/0/edit?mid=1eoi7New8AbLpAkqIk45B1a09nNoN_2U&usp=sharing",'/images/ruta1.jpg'),
("Fitz Roy", "Descubrí las rutas de escalada de la montaña más icónica de la Patagonia.",'Difícil',"https://www.google.com/maps/d/u/0/viewer?mid=1fMR2oulNscPGM_tUJ1LwPB40YNGE2r35&femb=1&ll=-49.352278364470926%2C-72.94179799999999&z=11",'/images/ruta2.jpg'),
("Piedra Parada", "Disfrutá de la escalada deportiva en una roca ubicada en el desierto patagónico.",'Fácil',"https://www.google.com.ar/maps/d/u/0/viewer?mid=1AMRKEzZGAedL70zi5bj29RfUgmYnTgM_&hl=es-419&femb=1",'/images/ruta3.jpg');

INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES
("Casco de Escalada","Casco de alta calidad para tu máxima protección.",250000.00,20,'/images/producto1.jpg'),
("Arnés de Escalada","Arnés ajustable y cómodo para tu seguridad.",300000.00,100,'/images/producto2.jpg'),
("Zapatillas de Escalada","Zapatos de agarre superior para un mejor rendimiento.",120000,20,'/images/producto3.jpg');

INSERT INTO sobre_nosotros (nombre, apellido, rol, descripcion, contacto, imagen) VALUES
('Nahuel','Lemos',"Guía de aventuras","Estudiante de Codo a Codo FullStack Node/Javascript",'mail@mail.com','/images/miembro1.jpg'),
('Alumna','Uno','Instructora',"Lorem ipsum dolor sit, amet consectetur adipisicing elit.","mail@mail.com",'/images/miembro2.jpg'),
('Alumno','Dos',"Instructor de niños","Officia magni vitae non aliquam, laboriosam quo maiores at aliquid.",'mail@mail.com','/images/miembro3.jpg');

USE paginaDeEscalada;
SELECT * FROM destinos;
SELECT * FROM productos;
SELECT * FROM sobre_nosotros;