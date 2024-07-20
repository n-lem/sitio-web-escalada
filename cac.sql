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
  descripcion TEXT NOT NULL,
  dificultad ENUM('Fácil', 'Intermedio', 'Difícil', 'Experto') NOT NULL,
  tiempo TEXT,
  precio INT NOT NULL,
  imagen VARCHAR(100)
);

-- Tabla de productos
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
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

INSERT INTO destinos (nombre, descripcion, dificultad, tiempo, precio, imagen) VALUES
('Aconcagua', "Conocé la montaña más alta del hemisferio sur.",'Intermedio',"6 días y 5 noches", 645802,'/images/ruta1.jpg'),
("Fitz Roy", "Descubrí las rutas de escalada de la montaña más icónica de la Patagonia.",'Difícil',"7 días y 6 noches", 877705,'/images/ruta2.jpg'),
("Piedra Parada", "Disfrutá de la escalada deportiva en una roca ubicada en el desierto patagónico.",'Fácil',"5 días y 4 noches",610485,'/images/ruta3.jpg');

INSERT INTO productos (nombre, precio, imagen) VALUES
("Casco negro y naranja",650000.00,'/images/productos/cascos/casco1.jpg'),
("Casco blanco y negro",110000.00,'/images/productos/cascos/casco2.jpg'),
("Casco violeta",250000.00,'/images/productos/cascos/casco3.jpg'),
("Arnés S",123500.00,'/images/productos/arnes/arnes1.png'),
("Arnés M",356160.00,'/images/productos/arnes/arnes2.jpg'),
("Arnés XL",456860.00,'/images/productos/arnes/arnes3.jpg'),
("Zapatillas urbanas",126590.00,'/images/productos/zapatillas/zapatilla1.jpg'),
("Zapatillas de escalada verdes",110356.51,'/images/productos/zapatillas/zapatilla2.jpg'),
("Zapatillas de escalada amarillas",235156.23,'/images/productos/zapatillas/zapatilla3.jpg'),
("Botas",1200000.00,'/images/productos/zapatillas/botas.jpg');

INSERT INTO sobre_nosotros (nombre, apellido, rol, descripcion, contacto, imagen) VALUES
('Nahuel','Lemos',"Guía de aventuras","Estudiante de Codo a Codo FullStack Node/Javascript",'mail@mail.com','/images/miembros/miembro1.jpg'),
('Alumna','Uno','Instructora',"Lorem ipsum dolor sit, amet consectetur adipisicing elit.","mail@mail.com",'/images/miembros/miembro2.jpg'),
('Alumno','Dos',"Instructor de niños","Officia magni vitae non aliquam, laboriosam quo maiores at aliquid.",'mail@mail.com','/images/miembros/miembro3.jpg');

SELECT * FROM destinos;
SELECT * FROM productos;
SELECT * FROM sobre_nosotros;