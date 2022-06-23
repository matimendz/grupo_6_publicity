const express = require('express');
const path = require('path');

const routes = express.Router();
const controller = require("../controller/controller")

//---rutas---
routes.get("/", controller.index)

routes.get("/info-pago", controller.info)

routes.get("/registro", controller.registro)

routes.get("/detalle-producto", controller.detalleProducto)

routes.get("/products", controller.listar)

routes.get("/login", controller.login)

routes.get("/recuperarPass", controller.recuperarPass)

routes.get("/carrito", controller.carrito)

routes.get("/modificarProducto", controller.modificarProducto)

routes.get("/abml", controller.abml)

routes.get("/alta",controller.alta)

routes.get("/info",controller.info)



module.exports = routes;

