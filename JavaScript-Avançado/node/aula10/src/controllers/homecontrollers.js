exports.paginaInicial = (req, res) => {
    res.send(
        `
            <form action="/" method="POST">
                Nome Do Cliente: <input name="nome" type="text">
                <button>Enviar Formulario</button>
            </form>
        `
    )
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}