const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true})) // serve para o req.body funcionar
app.set('views', path(__dirname, 'src', 'views')) // aqui eu faço um caminho para falar pro serve que os meus views vao esta na pasta views
app.set('view engine', 'ejs')

app.use(routes)// aqui eu falo para o app usar as minhas rotas que eu separei



app.listen(3003, () => console.log('rodando com sucesso'))