const router = require('express').Router();
const CategoriaOperaciones = require('../operaciones/CategoriaOperaciones');
//Rutas para el CRUD de categorias
router.get('/', CategoriaOperaciones.consultarCategorias);
router.get('/:nombre', CategoriaOperaciones.consultarCategoriaPorNombre);
router.post('/', CategoriaOperaciones.crearCategoria);
router.put('/:id', CategoriaOperaciones.actualizarCategoria);
router.delete('/:id', CategoriaOperaciones.eliminarCategoria);
module.exports = router;

