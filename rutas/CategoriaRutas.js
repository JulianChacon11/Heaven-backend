const router = require('express').Router();
const CategoriaOperaciones = require('../operaciones/CategoriaOperaciones');
//Rutas par el CRUD de categorias
router.get('/', CategoriaOperaciones.consultarCategorias);
router.get('/:id', CategoriaOperaciones.consultarCategoria);
router.post('/', CategoriaOperaciones.crearCategoria);
router.put('/:id', CategoriaOperaciones.actualizarCategoria);
router.delete('/:id', CategoriaOperaciones.eliminarCategoria);
module.exports = router;

