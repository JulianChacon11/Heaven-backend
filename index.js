//Importaciones
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./conexion");
//Configuraciones
const app = express();
const env = process.env
const port = env.PORT || 8000;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Rutas
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//Path: routes/index.js
app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/categorias", require("./rutas/CategoriaRutas"));