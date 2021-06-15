const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true})) // serve para o req.body funcionar

app.get('/', (req, res) => {
    res.send(
        `
            <form action="/" method="POST">
                Nome Do Cliente: <input name="nome" type="text">
                <button>Enviar Formulario</button>
            </form>
        `
    )
})

app.get('/testes/:id?', (req, res) => {
    console.log(req.params)
    console.log(req.query) // o req.query pega as query da url expl: ?node=andre&idade=18cidade=saopaulo // o? serve para iniciar uma query e o & para separar uma da o
    res.send(req.query)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('enviado')
})


app.listen(3003, () => console.log('rodando com sucesso'))