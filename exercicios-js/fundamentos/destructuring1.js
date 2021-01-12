// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua Tal",
        numero: 1200
    }
}

const {nome, idade} = pessoa //estou retirando os valores de pessoa, um select.
console.log(nome, idade) 
console.log(pessoa) 

const {nome: n, idade: i} = pessoa //posso tbm dar outro nome aos atributos criando variáveis
console.log(n, i) 

const { sobrenome, bemHumorada = true } = pessoa //tentar desestruturar atributos que não existem, retornará como undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa //para desestruturar atributos alinhados
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa //CUIDADO ao desestruturar atributos alinhados que não existem, irá retornar erro
console.log(ag, num)
