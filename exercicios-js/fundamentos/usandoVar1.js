/*Variáveis "VAR" tem, diferente de outras linguagens, apenas 2 escopos:
* - Dentro de uma function;
* - Fora de uma function.
*Ou seja, se for declarada fora de uma function ela é visível em todo o código,
*Se declarada dentro de uma function, ela é visiível apenas na function
*/

{
    {
        {
            {
                var sera = 'Será??'
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
}

teste()
console.log(local)