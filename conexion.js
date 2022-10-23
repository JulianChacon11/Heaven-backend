const mongoose = require('mongoose');
const username = 'u202midulce';
const password = 'mintic2022';
const database = 'miDulceOnlineBD';
const URI = "mongodb+srv://"+username+":"+password+"@u202midulceonline.wvv9oio.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = async() =>{
    try {
        await mongoose.connect(URI);
        console.log("Conectado a la BD");
    } catch (error) {
        console.log("Error al conectar a la BD"+error);
    }
};

conectar();

module.exports = mongoose;