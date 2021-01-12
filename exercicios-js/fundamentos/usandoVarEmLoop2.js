const funcs = []

for (var i = 0; i < 10; i++) {
   funcs.push(function(){
       console.log(i)
   })    
}

/*Nesse caso, mesmo sendo uma variável de escopo Global, o VAR
*não respeita e imprime sempre o valor de 'i' como valor de 
*saída do loop
*/
funcs[2]()
funcs[8]()