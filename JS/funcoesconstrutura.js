function Pessoa(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
let pessoa1 = new Pessoa("Davi")
let pessoa2 = new Pessoa("Alana")
console.log(pessoa1.walk())
console.log(pessoa2.name)