class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade 
        this.tipo = tipo 
    }

    tipoAtaque() {
        if (this.tipo === "mago"){
            return "magia"
        } else if (this.tipo === "guerreiro"){
            return "espada"
        } else if (this.tipo === "monge"){
            return "artes marciais"
        } else 
            return "shuriken"
    }

    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.tipoAtaque()}`)
    }

}

let heroi = new hero("Thais", 25, "guerreiro")
heroi.atacar()