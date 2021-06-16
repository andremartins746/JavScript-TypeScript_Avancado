exports.paginaInicial = (req, res) => {
    res.render('index') // aqui eu estou rendenizando a pagina index da views
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}