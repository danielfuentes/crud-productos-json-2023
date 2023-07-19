/*
Métodos HTTP
get --> Consultar
post  ---> enviar al servidor - guardar
delete ---> enviar al servidor - borrar
put ---> enviar al servidor - actualiazar
*/
const express = require('express');
const path = require('path');
const router = express.Router();

//Debo requerir nuestro controlador
const controllersProducto = require('../controllers/controllersProducto');

//Armo mis rutas
router.get('/productos', controllersProducto.index)

//No olvidar el module.exports
module.exports = router;