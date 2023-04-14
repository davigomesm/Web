//scopo com var ->
console.log("existe x?", x)

{
    var x = 0
}
//aqui a variavel x vai existir como indefinida, pq -> isso é definido como hoisting
//vai contecer isso por baixo dos panos em js ->
var x
console.log("existe x?", x)
{
    x = 0
}
//o scopo de var é global e local

//----------------------------------------------------------------------

//scopo com let e const
//o scopo de let e const são locais, so vao funcionar dentro do bloco
let y = 0
{
    let y = 1
    console.log(y)
}
console.log(y)
// assim teremo 1 e 0, mas se mudar-mos o bloco para:
let y = 0
{
    y = 1
    console.log(y)
}
console.log(y)
//assim teremos 0 e 0

//-------------------------------------------------------------------
//ja no scopo com const
const z = 0
{
    z = 1
    console.log(z)
}
console.log(z)
//vai da erro pq umas varialvel constante n pode ser alterada em outro bloco
// mas se fizermos assim:
const z = 0
{
    const z = 1
    console.log(z)
}
console.log(z)
//vai ficar 1 e 0