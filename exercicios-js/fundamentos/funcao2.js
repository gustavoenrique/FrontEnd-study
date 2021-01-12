// Armazenando uma funcao em uma variável
const imprimirSoma = function (a, b) { //função anônima, basta apenas não passar o nome
    console.log(a + b)
}

imprimirSoma( 1, 7)

//Armazenando uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(7, 12))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(7, 12))

// Retorno implícito com apenas 1 param (sem necessidade de "()" )
const imprimi2 = a => console.log(a)

imprimi2('Deu certo!')
