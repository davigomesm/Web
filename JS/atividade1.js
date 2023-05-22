var n1 = prompt("Jogador1: digite um numero: ");
n1 = parseInt(n1);
var n2 = prompt("Jogador2: digite um numero: ");
n2 = parseInt(n2);
if (n1 == n2) {
    alert("Empate");
} 
else {
    var numsort = parseInt(Math.random() * 2);
    alert("se o valor sorteado for = 1, o maior numero vence | se for = 0, o menor numero vence");
    alert("valor sorteado: " + numsort);
    if (numsort === 1){
        if (n1 > n2){
            alert("Jogador1 ganhou");
        }
        if (n2 > n1){
            alert("Jogador2 ganhou");
        }
    }
    if (numsort === 0){
        if (n1 < n2){
            alert("Jogador1 ganhou");
        }
        if (n2 < n1){
            alert("Jogador2 ganhou");
        }
    }
}