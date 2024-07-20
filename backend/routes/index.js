var express = require('express');
var router = express.Router();
var db = require('../db'); // Asegúrate de que la conexión a la base de datos esté en db.js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');


/* Página principal (index). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Escalada y aventura' });
});

/* Página contacto. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto - Escalada y aventura' });
});

/* Página tienda. */
router.get('/tienda', function(req, res, next) {
  db.query('SELECT * FROM productos', function (error, results, fields) {
    if (error) throw error;
    res.render('tienda', { title: 'Tienda - Escalada y aventura', productos: results });
  });
});

/* Página rutas. */
router.get('/rutas', function(req, res, next) {
  db.query('SELECT * FROM destinos', function (error, results, fields) {
    if (error) throw error;
    res.render('rutas', { title: 'Rutas - Escalada y aventura', destinos: results });
  });
});

/* Página sobre-nosotros. */
router.get('/sobre-nosotros', function(req, res, next) {
  db.query('SELECT * FROM sobre_nosotros', function (error, results, fields) {
    if (error) throw error;
    res.render('sobre-nosotros', { title: 'Sobre nosotros - Escalada y aventura', sobre_nosotros: results });
  });
});

/* Dashboard de productos. */
router.get('/productos', function(req, res, next) {
  db.query('SELECT * FROM productos', function (error, results, fields) {
    if (error) throw error;
    res.render('1_ListaProductos', { title: 'Listado de productos - Escalada y aventura', productos: results });
  });
});

/* Alta de productos. */
router.get('/alta', function(req, res, next) {
  res.render('2_FormularioAlta');
});

router.post('/alta', upload.single('imagen'), function(req, res, next) {
  let sentencia = 'INSERT INTO productos (nombre, descripcion, imagen) VALUES (?, ?, ?)';
  db.query(sentencia, [req.body.nombre, req.body.descripcion, `/images/${req.file.originalname}`], function(error, results, fields) {
    if (error) throw error;
    fs.createReadStream(`./uploads/${req.file.filename}`).pipe(fs.createWriteStream(`./public/images/${req.file.originalname}`));
    res.render("finalizado", { mensaje: "Producto ingresado exitosamente" });
  });
});

/* Modificación de productos. */
router.get('/modificar/:id', function(req, res, next) {
  db.query('SELECT * FROM productos WHERE id = ?', [req.params.id], function(error, results, fields) {
    if (error) throw error;
    res.render('3_ModificarProducto', { data: results });
  });
});

router.post('/modificar/:id', upload.single('imagen'), function(req, res, next) {
  let sentencia;
  if (req.file) {
    sentencia = 'UPDATE productos SET nombre = ?, precio = ?, imagen = ? WHERE id = ?';
    db.query(sentencia, [req.body.nombre, req.body.precio, `/images/${req.file.originalname}`, req.params.id], function(error, results, fields) {
      if (error) throw error;
      fs.createReadStream(`./uploads/${req.file.filename}`).pipe(fs.createWriteStream(`./public/images/${req.file.originalname}`));
      res.render('finalizado', { mensaje: "Producto modificado exitosamente" });
    });
  } else {
    sentencia = 'UPDATE productos SET nombre = ?, precio = ? WHERE id = ?';
    db.query(sentencia, [req.body.nombre, req.body.precio, req.params.id], function(error, results, fields) {
      if (error) throw error;
      res.render('finalizado', { mensaje: "Producto modificado exitosamente" });
    });
  }
});

/* Eliminación de productos. */
router.get('/eliminar/:id', function(req, res, next) {
  db.query('SELECT * FROM productos WHERE id = ?', [req.params.id], function(error, results, fields) {
    if (error) throw error;
    res.render('4_FormularioEliminar', { data: results });
  });
});

router.post('/eliminar/:id', function(req, res, next) {
  db.query('DELETE FROM productos WHERE id = ?', [req.params.id], function(error, results, fields) {
    if (error) throw error;
    res.render('finalizado', { mensaje: "Producto eliminado exitosamente" });
  });
});

module.exports = router;
