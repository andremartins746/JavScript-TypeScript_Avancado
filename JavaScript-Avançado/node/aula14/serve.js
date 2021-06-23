require('dotenv').config() // importando o dotenv para pegar a senha do arquivo .env
// imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//conectios mongodb and mongoose

mongoose.connect(process.env.conectionString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto') // emitir uma evento quando estiver pronto
    })
    .catch((e) => console.log(e))


const routes = require('./routes')
const path = require('path')

// app users files
app.use(express.urlencoded({ extended: true})) // serve para o req.body funcionar

app.use(express.static(path.resolve(__dirname, 'public'))) // usar a pasta de conteudo statico "os css imagens e etc..."

//configs
app.set('views', path.resolve(__dirname, 'src', 'views')) // aqui eu faço um caminho para falar pro serve que os meus views vao esta na pasta views
app.set('view engine', 'ejs')

app.use(routes)// aqui eu falo para o app usar as minhas rotas que eu separei

// escutar na porta
app.on('pronto', () => { // quando o evento estiver pronto execultar!
    app.listen(3003, () => console.log(' http://localhost:3003  rodando com sucesso'))
})