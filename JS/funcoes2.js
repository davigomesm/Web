var soma = function(num1, num2){
    resultado = num1 + num2
}
soma(2, 2)
console.log(resultado)

var soma = function(num1, num2){
    let resultado = num1 + num2
    return resultado
}
var num1 = 1
var num2 = 2
console.log(`O valor do primeiro numero é ${num1}`)
console.log(`O valor do segundo numero é ${num2}`)
console.log(`E a soma dos dois valores é ${soma(num1, num2)}`)