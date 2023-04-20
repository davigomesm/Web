// manipulando array
let palavras = ["Davi", "Alana"]
// add item no final do array
palavras.push("Vilani")
console.log(palavras)
// add item no inicio do array
palavras.unshift("Lauro")
console.log(palavras)
// remover item do final
palavras.pop()
console.log(palavras)
// remover do começo
palavras.shift()
console.log(palavras)
// pegar alguns itens do array
palavras.push("Vilani") // add vilani dnv
console.log(palavras.slice(1, 3))
// remover alguns itens de qualquer lugar no array
palavras.splice(1, 1)
console.log(palavras)
// adicionando mais palavras
palavras.push("Bluuh")
palavras.push("Vilani2")
palavras.push("Alana")
palavras.push("Lauro")
// qual index do array está uma palavra
let index = palavras.indexOf("Davi")
console.log(index)