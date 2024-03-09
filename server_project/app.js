// Archivo encargado de generar las rutas del proyecto

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Versión de la api
const API_VERSION = "/api/v1";

// Importación de los archivos de rutas
const user_routes = require("./routes/user_routes");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Rutas
// http:localhost:3000/api/v1/users/new-user
app.use(`${API_VERSION}/users`, user_routes);

module.exports = app;
