const router = require('express').Router();
const CategoriaOperaciones = require('../operaciones/CategoriaOperaciones');

router.get('/', CategoriaOperaciones.consultarCategorias);
router.get('/:id', CategoriaOperaciones.consultarCategoria);
router.post('/', CategoriaOperaciones.crearCategoria);
module.exports = router;

