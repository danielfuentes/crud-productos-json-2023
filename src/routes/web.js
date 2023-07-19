//Para nuestras rutas debemos considerar lo siguiente:
//Si ustedes quieren mostrar toda la informacion de lo que deseen: index
//Si desean mostrar el detalle de un producto: show
//Si desean actualizar un producto: edit
// Si desean crear un producto o usuario: create
//Si desean borrar un producto: delete
const express = require('express');
const path = require('path');
const router = express.Router();

//Debo requerir nuestro controlador
const controllersWeb = require('../controllers/controllersWeb');

//Armo mis rutas
router.get('/', controllersWeb.index)

//No olvidar el module.exports
module.exports = router;