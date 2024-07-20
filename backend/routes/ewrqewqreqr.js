var express = require('express');
var router = express.Router();
var db = require('../db');


/* Obtengo página principal (index). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Escalada y aventura' });
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
  res.render('')
  let sentencia = 'insert into productos (nombre, descripcion, precio, imagen) values(';
});




module.exports = router;
