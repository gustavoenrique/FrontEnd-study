/*FUJA SEMPRE DO ESCOPO GLOBAL ( VAR FORA DE FUNCTION).
*Ter escopo global com VAR com mesmo nome, vai sempre ser uma única VAr
*/
var numero = 7
{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)
