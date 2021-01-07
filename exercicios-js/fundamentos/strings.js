const estudando = "Frontend";

console.log(estudando.charAt(4)); //Pegando o caractere dessa posição
console.log(estudando.charAt(50)); //Pegando o caractere dessa posição

console.log(estudando.charCodeAt(3)); //Pegando o código do caractere dessa posição

console.log(estudando.indexOf('t')); //Mostrando qual a posição desse caractere

console.log(estudando.substring(1));
console.log(estudando.substring(0,6));

console.log('Estudando '.concat(estudando).concat("!"));
console.log('Estudando '+ estudando + "!");

console.log(estudando.replace('e', 3));
console.log(estudando.replace(/\w/g, '1')); //Aqui está sendo utilizado REGEX (Regular Expressions)

console.log('Ana,Maria,Pedro,'.split(','));

