//Modelo para la tabla de productos
const mongoose = require("mongoose");
const productoSchema =  mongoose.Schema({
    nombre: {type: String, maxLenght: 40, unique: true, required: true},
    marca: {type: String, maxLenght: 20, required: true},
    presentacion: {type: String, maxLenght: 200, required: true},
    precio: {type: Number, required: true},
    categoria: {type: String, maxLenght: 25, required: true},
    ruta_img: {type: String, maxLenght: 200, required: true},
    activo: {type: Boolean, required: true}
});
module.exports = mongoose.model("productos", productoSchema);