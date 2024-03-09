const express = require("express");
const app = express();
require("dotenv").config();

// process.env permite acceso a las variables del archivo .env
PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`${PORT} listening on`));
