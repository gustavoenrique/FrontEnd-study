//Funcao sem retorno
function imprimirSoma(a, b){ //Por causa da tipagem fraca, não precisa definir o tipo da var
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //O JS permiti passar apenas 1 parâmetro, porém dará como NaN, 
                // pois o 2º param fou um Undefined
imprimirSoma(2,11,4,5,6) //o JS tbm permiti passar mais de um param, porém
                        //como a função precisa apenas de 2, pega apenas os
                        //2 primeiro e ignora o restante
imprimirSoma()

//Função com retorno
function soma(a, b = 333){
    return a+ b
}

console.log(soma(2,3))
console.log(soma(2))