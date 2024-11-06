let resultadoCalculado = getPokemon (50,20) 

function getPokemon (vitorias, derrotas) {
    let resultado = vitorias - derrotas 
    return resultado 
} 

function levelPokemon () {
    if (resultadoCalculado <= 10) {
        return "Ferro"
    } else if (resultadoCalculado >=11 && resultadoCalculado <= 20) {
        return "Bronze"
    } else if (resultadoCalculado >=21 && resultadoCalculado <= 50) {
        return "Prata"
    } else if (resultadoCalculado >=51 && resultadoCalculado <= 80) {
        return "Ouro"
    } else if (resultadoCalculado >=81 && resultadoCalculado <= 90) {
        return "Diamante"
    } else if (resultadoCalculado >=91 && resultadoCalculado <= 100) {
        return "Bronze"
    } else {
        return "Imortal"
    }
}


console.log("O Herói tem saldo de " + resultadoCalculado + " está no nível " + levelPokemon ())