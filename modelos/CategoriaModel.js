//Modelo para la tabla de categorias
const mongoose = require("mongoose");
const categoriaSchema =  mongoose.Schema({
    nombre: {type: String, maxLenght: 25, unique: true, required: true},
    descripcion: {type: String, maxLenght: 200, required: true},
    estado: {type: Boolean, required: true}
}); 
module.exports = mongoose.model("categorias", categoriaSchema);