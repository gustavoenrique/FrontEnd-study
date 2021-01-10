/*
* A diferença entre UNDEFINED e NULL é que no caso do JS, quando você
*não inicializa uma variável, ela será Undefined.
* Já o NULL você inicializou,  mas não está apontado para nenhum endereço 
*de memória
*/

  
let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) /*Nesse caso funciona, pois produto foi definido.
                            *Caso tente acessar alguma coisa de preco(que está
                            *Undefined), ai dará erro, pois preco não foi 
                            *definido
                            */
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined para tentar deletar 
                          // algum atributo do objeto. Usar o Delete, no ex abaixo
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)