const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modulos/escrever')
const ler = require('./modulos/ler')

const pessoas = [
    {
        nome: 'Davi'
    },
    {
        nome: 'Deco'
    },
    {
        nome: 'Monique'
    },
    {
        nome: 'Odair'
    }
]
const json = JSON.stringify(pessoas, '', 2) // arquivos em json
escreve(caminhoArquivo, json)


async function lerArquivo(caminho) {
   const dados = await ler(caminho)
   rendenisaDados(dados)
}

function rendenisaDados(dados) {
    dados = JSON.parse(dados) // arquivos em obj
    dados.forEach(element => console.log(element));
}

lerArquivo(caminhoArquivo)