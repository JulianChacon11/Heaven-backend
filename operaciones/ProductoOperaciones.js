const ProductoModelo = require("../modelos/ProductoModel");
const ProductoOperaciones = {}; //Se crea el objeto ProductoOperaciones

ProductoOperaciones.crearProducto = async (req, res) => {
  try {
    const objetoProducto = req.body;
    const producto = new ProductoModelo(objetoProducto);
    const productoCreado = await producto.save();
    res.status(201).send("Producto agregado: " + productoCreado);
  } catch (error) {
    res.status(400).send("Error al crear el producto" + error);
  }
};

ProductoOperaciones.consultarProducto = async (req, res) => {
  try{
    const id = req.params.id;
    const producto = await ProductoModelo.findById(id);
    if(producto != null){
      res.status(200).json(producto);
    }else{
      res.status(404).send("Producto no encontrado");
    }
  }catch (error) {
  res.status(400).send("Error al consultar el producto" + error);
  }
};

ProductoOperaciones.consultarProductos = async (req, res) => {
  try {
    const filtro = req.query;
    let listaProductos = [];
    if (filtro.q != null) {
      listaProductos = await ProductoModelo.find({
        $or: [
          { "nombre": { $regex: filtro.q, $options: "i" } },
          { "marca": { $regex: filtro.q, $options: "i" } },
          { "presentacion": { $regex: filtro.q, $options: "i" } },
          { "categoria": { $regex: filtro.q, $options: "i" } },
          { "activo": { $regex: filtro.q, $options: "i" } },
        ],
      });
    } else {
      listaProductos = await ProductoModelo.find(filtro);
    }

    if (listaProductos.length > 0) {
      res.status(200).json(listaProductos);
    } else {
      res.status(404).send("No hay productos");
    }
  } catch (error) {
    res.status(400).send("Error al consultar el producto" + error);
  }
};

ProductoOperaciones.actualizarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const objetoProducto = req.body;
    const productoActualizado = await ProductoModelo.findByIdAndUpdate(
      id,
      objetoProducto
    );
    if(productoActualizado != null){
      res.status(200).json(objetoProducto);
    }else{
      res.status(404).send("Producto no encontrado");
    }
    
  } catch (error) {
    res.status(400).send("Error al actualizar el producto" + error);
  }
};

ProductoOperaciones.eliminarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const productoEliminado = await ProductoModelo.findByIdAndDelete(id);
    if(productoEliminado != null){
      res.status(200).send("Producto eliminado: " + productoEliminado);
    }else{
      res.status(404).send("Producto no encontrado");
    }
  } catch (error) {
    res.status(400).send("Error al eliminar el producto" + error);
  }
};
module.exports = ProductoOperaciones;
