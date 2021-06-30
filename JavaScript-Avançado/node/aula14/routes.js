const express = require('express')
const route = express.Router()
const homeControllers = require('./src/controllers/homecontrollers')
const ContatoControllers = require('./src/controllers/contatoControllers')
const ImagensControllers = require('./src/controllers/ImagensControllers')

//rotas da home
route.get('/', homeControllers.paginaInicial)
route.post('/', homeControllers.trataPost)

// rotas de contato
route.get('/contatos', ContatoControllers.paginaInicial)
route.get('/imagens', ImagensControllers.imagens)


module.exports = route;