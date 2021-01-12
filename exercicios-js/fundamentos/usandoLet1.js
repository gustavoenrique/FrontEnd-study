/*Variáveis do tipo LET tem 3 escopos:
* - Dentro de uma function;
* - Fora de uma function.
* - escopo de bloco (usando {}).
*/

var numero = 1
{
    let numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)

/*No caso de usar variáveis LET em escopo de bloco, sempre será usado a variável 
*do escopo menor, caso não ache, ele usa o próximo escopo. Ex abaixo parecido com
*o ex acima
*/

var numero = 1
{
    let numero2 = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)