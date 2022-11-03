const router = require('express').Router();
const ProductoOperaciones = require('../operaciones/ProductoOperaciones');

router.get('/', ProductoOperaciones.consultarProductos);
router.get('/:id', ProductoOperaciones.consultarProducto);
router.post('/', ProductoOperaciones.crearProducto);
router.put('/:id', ProductoOperaciones.actualizarProducto);
router.delete('/:id', ProductoOperaciones.eliminarProducto);

module.exports = router;