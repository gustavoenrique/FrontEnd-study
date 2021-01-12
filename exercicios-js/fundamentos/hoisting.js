/*
Conceito de HOISTING: "jogar" variáveis VAR para o topo do código

Variáveis do tipo VAR, diferente de outras linguagens, acontecem o
*HOISTING (içamento) da variável "para o início do código".
*Então nesse caso, é possível utilizar uma variável antes de declara-la (o que
*será feito posteriomente) porém seu valor será Undefined
*/

console.log('a = ', a)
var a = 2
console.log('a = ', a)

/*Aqui, o interpretador da linguagem faz o mesmo que:

var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

*/

//Isso funciona até mesmo no escopo de função
function teste() {
    console.log('a = ', a)
    var a = 7
    console.log('a = ', a)
}
teste()

//Isso não ocorre com variáveis LET/CONST, ocasionando erro
console.log('a = ', b)
let b = 3
console.log('a = ', b)