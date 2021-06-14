// literal
const pessoa = {
    nome: 'Andre',
    sobreNome: 'Martins'
}

console.log(pessoa.nome)
console.log(pessoa.sobreNome)
console.log(pessoa['nome'])
console.log(pessoa['sobreNome'])

const chave = 'nome'
console.log(pessoa[chave])

// construtor
const pessoas2 = new Object();
pessoas2.nome = 'luiz'
pessoas2.sobreNome = 'Otavio'
pessoas2.falarNome = function() {
    console.log(`${this.nome} esta falando seu nome`)
}
delete pessoas2.nome
console.log(pessoas2.falarNome())
