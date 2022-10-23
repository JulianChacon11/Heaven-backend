const CategoriaModelo = require('../modelos/CategoriaModel');
const CatergoriaOperaciones = {};

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

CatergoriaOperaciones.actualizarCategoria = async(req,res) => {

}

CatergoriaOperaciones.eliminarCategoria = async(req,res) => {
}

module.exports = CatergoriaOperaciones;