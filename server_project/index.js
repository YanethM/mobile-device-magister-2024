// Archivo encargado de generar la conexión con la base de datos de mongo 

const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();

// process.env permite acceso a las variables del archivo .env
PORT = process.env.PORT || 3001;

// Conectar a la base de datos
const mongooseConnect = () =>
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => console.log(`${PORT} listening on http://localhost:${PORT}`));
    })
    .catch((err) => console.log(err));

mongooseConnect();
