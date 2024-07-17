const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/upload');
const { body } = require('express-validator');

router.get('/productos', productController.listProducts);
router.get('/productos/nuevo', productController.showProductForm);
router.post('/productos/crear', upload.single('imagen'), [
  body('nombre').notEmpty().withMessage('El nombre es requerido'),
  body('precio').isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo')
], productController.createProduct);
router.get('/productos/editar/:id', productController.showEditForm);
router.post('/productos/update/:id', upload.single('imagen'), [
  body('nombre').notEmpty().withMessage('El nombre es requerido'),
  body('precio').isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo')
], productController.updateProduct);
router.post('/productos/delete/:id', productController.deleteProduct);

module.exports = router;