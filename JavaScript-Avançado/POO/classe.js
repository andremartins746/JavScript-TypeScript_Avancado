class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }
    
   

}

const p1 = new Pessoa('Andre', 'Martins')
const p2 = new Pessoa('Monique', 'Martins')

console.log(p1)
console.log(p2)