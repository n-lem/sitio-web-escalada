var express = require('express');
var router = express.Router();
var db = require('../db');


/* Obtengo página principal (index). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Escalada y aventura' });
});

/* Obtengo página contacto. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto - Escalada y aventura' });
});

/* Obtengo página tienda. */
router.get('/tienda', function(req, res, next) {
  db.query('SELECT * FROM productos', function (error, results, fields) {
    // console.log(results);
    if (error) throw error;
    console.log(results);
    res.render('tienda', { title: 'Tienda - Escalada y aventura', productos: results });
  });
});

/* Obtengo página rutas. */
router.get('/rutas', function(req, res, next) {
  db.query('SELECT * FROM destinos', function (error, results, fields) {
    // console.log(results);
    if (error) throw error;
    res.render('rutas', { title: 'Rutas - Escalada y aventura', destinos: results });
  });
});

/* Obtengo página sobre-nosotros. */
router.get('/sobre-nosotros', function(req, res, next) {
  db.query('SELECT * FROM sobre_nosotros', function (error, results, fields) {
    // console.log(results);
    if (error) throw error;
    res.render('sobre-nosotros', { title: 'Sobre nosotros - Escalada y aventura', sobre_nosotros: results });
  });
});


/* Dashboard de productos. */
router.get('/productos/', function(req, res, next) {
  db.query('SELECT * FROM productos', function (error, results, fields) {
    // console.log(results);
    if (error) throw error;
    res.render('1_ListaProductos', { title: 'Listado de productos - Escalada y aventura', productos: results });
  });
});

/* Alta de productos. */
router.get('/alta/', function(req, res, next) {
  let sentencia = 'insert into productos (nombre, descripcion, precio, imagen) values(';
});







module.exports = router;
