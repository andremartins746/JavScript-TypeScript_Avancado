// Função construtora -> objetos
// Função Fabrica -> Objetos
// construtoras -> 1º letra sempre em maiúscula, Sempre usamos o (new)

function Pessoa(nome, sobrenome) { // função construtora não precissa retornar um obj pq ele já intende que as {} da função é o obj
    
    const ID= 123456  // vai está privado
    const metodoInterno = function () { // vai está privado

    }
    
    this.nome = nome // vai esta público
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    }
}

const p1 = new Pessoa('andre', 'martins') // sempre usar o new em funções construtoras
const p2 = new Pessoa('otavio', 'otavío')
p2.metodo()
