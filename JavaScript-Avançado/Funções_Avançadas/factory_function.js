// funções fabricas

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(" ")
            this.nome = valor.shift() // o shift retira o primeiro elemento do arrey
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        //getter
        get imc(){ // o get serve para tornar o imc para atribulto, ele nao é mais uma function
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },


    }
}

const p1 = criaPessoa('andre', 'martins', 1.88, 73)
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())




