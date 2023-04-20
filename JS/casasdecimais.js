// casas decimais e trocando . por virgula
let num1 = 12.121232323232
console.log(num1.toFixed(2).replace(".", ","))
// aqui no caso virou uma string
console.log(Number(num1.toFixed(2).replace(".", ",")))
// assim o resultado será NaN