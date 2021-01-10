let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

//Abaixo são valores que não são verdadeiro ou falsos, 
//mas que podem ser convertidos para isso
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

/*Forma característica do JS para você conseguir um valor padrão de uma variável
 *nesse caso, dá utilizar o || para verificar se um valor é verdadeiro, caso não seja
 *válido, usar o segunda valor como padrão
*/
let nome = 'Lucas'
console.log(nome || 'Desconhecido')
nome = ''
console.log(nome || 'Desconhecido')