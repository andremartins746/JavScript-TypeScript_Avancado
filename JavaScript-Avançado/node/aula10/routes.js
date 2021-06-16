const express = require('express')
const route = express.Router()
const homeControllers = require('./src/controllers/homecontrollers')
const ContatoControllers = require('./src/controllers/contatoControllers')

//rotas da home
route.get('/', homeControllers.paginaInicial)
route.post('/', homeControllers.trataPost)

// rotas de contato
route.get('/contatos', ContatoControllers.paginaInicial)


module.exports = route;