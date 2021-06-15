const express = require('express')
const app = express()

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

app.post('/', (req, res) => {
    res.send('enviado')
})

app.get('/contato', (req, res) => {
    res.send('obrigado por entrar em contato!')
})


app.listen(3003, () => console.log('rodando com sucesso'))