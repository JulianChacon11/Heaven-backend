const CategoriaModelo = require('../modelos/CategoriaModel');
const CatergoriaOperaciones = {};

/**
 * Metodo para crear una categoria
 * @param {*} req se pasa el objeto categoria en el body
 * @param {*} res se devuelve el objeto categoria creado
 */
CatergoriaOperaciones.crearCategoria = async(req,res) => {
   try {
        const objetoCategoria = req.body;
        const categoria = new CategoriaModelo(objetoCategoria);
        const categoriaCreada = await categoria.save();
        res.status(201).send(categoriaCreada);
   } catch (error) {
         res.status(400).send("Error al crear la categoria"+error);
   }
}

/**
 * Metodo para consultar una categoria
 * @param {*} req se recibe el id de la categoria
 * @param {*} res si la categoria existe se envia la categoria, si no existe se envia un mensaje
 */
CatergoriaOperaciones.consultarCategoria = async(req,res) => {
    try{
        const id = req.params.id;
        const categoria = await CategoriaModelo.findById(id);
        if(categoria != null){
            res.status(200).json(categoria);
        }else{
            res.status(404).send("Categoria no encontrada");
        }
       
    }catch (error) {
        res.status(400).send('Error al consultar la categoria'+error);
    }
}

/**
 * Metodo para consultar todas las categorias
 * @param {*} req 
 * @param {*} res retorna un arreglo con todas las categorias, si no hay categorias retorna un mensaje
 */
CatergoriaOperaciones.consultarCategorias = async(req,res) => {
    try{
        const listaCategorias = await CategoriaModelo.find();
        if(listaCategorias.length > 0){
            res.status(200).json(listaCategorias);
        }else{
            res.status(404).send("No hay categorias");
        }
       
    }catch{
        res.status(400).send('Error al consultar la categoria');
    }
}

/**
 * Metodo para actualizar una categoria
 * @param {*} req se recibe el id de la categoria y el objeto categoria en el body.
 * @param {*} res se devuelve el objeto categoria actualizado. Si no existe la categoria se envia un mensaje
 */
CatergoriaOperaciones.actualizarCategoria = async(req,res) => {
    try{
        const id = req.params.id;
        const objetoCategoria = req.body;
        const categoria = await CategoriaModelo.findByIdAndUpdate(id,objetoCategoria);
        if(categoria != null){
            res.status(200).json(objetoCategoria);
        }else{
            res.status(404).send("Categoria no encontrada");
        }
    } catch (error) {
        res.status(400).send('Error al actualizar la categoria'+error);
    }

}


/**
 * Metodo para eliminar una categoria
 * @param {*} req se recibe el id de la categoria a eliminar.
 * @param {*} res retorna la categoria eliminada. Si no existe la categoria se envia un mensaje.
 */
CatergoriaOperaciones.eliminarCategoria = async(req,res) => {
    try{
        const id = req.params.id;
        const categoria = await CategoriaModelo.findByIdAndDelete(id);
        if(categoria != null){
            res.status(200).json(categoria);
        }else{
            res.status(404).send("Categoria no encontrada");
        }
    } catch (error) {
        res.status(400).send('Error al eliminar la categoria'+error);
    }
}

module.exports = CatergoriaOperaciones;