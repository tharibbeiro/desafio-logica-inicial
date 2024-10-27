let nomeHeroi = "Thais"
let pontuacaoHeroi = 6520
let nivelHeroi = ""

if(pontuacaoHeroi < 1000) {
    nivelHeroi = "Ferro"
} else if (pontuacaoHeroi >= 1001 && pontuacaoHeroi <= 2000) {
    nivelHeroi = "Bronze"
} else if (pontuacaoHeroi >= 2001 && pontuacaoHeroi <= 5000) {
    nivelHeroi = "Prata"
} else if (pontuacaoHeroi >= 5001 && pontuacaoHeroi <= 7000) {
    nivelHeroi = "Ouro"
} else if (pontuacaoHeroi >= 7001 && pontuacaoHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if (pontuacaoHeroi >= 8001 && pontuacaoHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if (pontuacaoHeroi >= 9001 && pontuacaoHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else if (pontuacaoHeroi >= 10001) {
    nivelHeroi = "Radiante"
}
console.log("O Héroi de nome: " + nomeHeroi + " está no nível de " + nivelHeroi)