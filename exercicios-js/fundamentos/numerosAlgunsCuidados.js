console.log(7 / 0);
console.log("10" / 2); //Tomar cuidado pq o Javascript tenta converter para número e fazer a operação
console.log("10" + 2); //O '+' irá concatenar, pois faz sentido para string, já as outras operações naõ
console.log("10" - 2); //outro exemplo seria subtrair, como não faz sentido para String, ele converte e faz a operação
console.log("Show!" * 2);
console.log(0.1 + 0.7); //A especificação do JS nunca dará valor exato com ponto flutuante, por causa da lentidão que levaria para calcular.
// console.log(10.toString()) //Não funciona no literal o toString
console.log((10.345).toFixed(2)) //Mas consegue usar a função quando utilizado dentro de parenteses