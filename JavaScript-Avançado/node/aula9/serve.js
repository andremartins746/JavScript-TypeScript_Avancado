const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true})) // serve para o req.body funcionar
app.use(routes) // aqui eu falo para o app usar as minhas rotas que eu separei



app.listen(3003, () => console.log('rodando com sucesso'))