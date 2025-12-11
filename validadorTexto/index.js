// Validador de Texto

function analisarTexto(texto) { 
    // Função principal que chama todas as outras.
    if (texto.length === 0) {
        console.log("Por favor insira uma frase válida.")
        return
    }

    let resposta = {
        caracteres: contarCaracteres(texto),
        palavras: contarPalavras(texto),
        frases: contarFrases(texto),
        palavraMaisLonga: encontrarPalavraMaisLonga(texto),
        frequencia: definirFrequenciaPalavras(texto),
    }
    return resposta
}

function contarCaracteres(texto) {
    // Função que conta os caracteres
    texto = texto.toLocaleLowerCase().split(" ")
    let qntdCaracteres = 0;
    for (let palavra = 0; palavra < texto.length; palavra++) {
        qntdCaracteres += texto[palavra].length
    }
    return qntdCaracteres
}

function contarPalavras(texto) {
    // Conta as palavras do texto
    texto = texto.toLocaleLowerCase().split(" ")
    let qntdPalavras = texto.length
    return qntdPalavras
}

function contarFrases(texto) {
    // Função que conta as frases
    texto = texto.toLocaleLowerCase().split(" ")
    let qntdFrases = 0
    for (let palavra = 0; palavra < texto.length; palavra++) {
        for (let caracter = 0; caracter < texto[palavra].length; caracter++) {
            if (texto[palavra][caracter] === ".") {
                qntdFrases += 1
            }
            if (texto[palavra][caracter] === "!") {
                qntdFrases += 1
            }
            if (texto[palavra][caracter] === "?") {
                qntdFrases += 1
            }
        }
    }
    return qntdFrases
}

function encontrarPalavraMaisLonga(texto) {
    // Função que encontra a palavra mais longa
    texto = texto.split(" ")
    let palavraMaisLonga = ""
    for (let palavra = 0; palavra < texto.length; palavra++) {
        let palavraCandidata = texto[palavra].trimEnd(".").trimEnd("?").trimEnd("!")
        if (palavraCandidata.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavraCandidata
        }
    }
    return palavraMaisLonga
}

function definirFrequenciaPalavras(texto) {
    // Função que retorna um objeto com a frequencia de cada palavra
    texto = texto.toLocaleLowerCase().split(" ")
    let freqPalavras = {}
    for (let palavra = 0; palavra < texto.length; palavra++) {
        let palavraAnalisada = texto[palavra].replace(".", "").replace("!", "").replace("?", "")
        if (Object.hasOwn(freqPalavras, palavraAnalisada)) {
            freqPalavras[palavraAnalisada] += 1
        }
        else {
            freqPalavras[palavraAnalisada] = 1
        }
    }
    return freqPalavras
}

const texto = "O JavaScript é poderoso. O JavaScript é divertido!"

console.log("\nTESTES UNITÁRIOS:")
console.log("Caracteres: " + contarCaracteres(texto))
console.log("Palavras: " + contarPalavras(texto))
console.log("Frases: " + contarFrases(texto))
console.log("Palavra mais Longa: " + encontrarPalavraMaisLonga(texto))
console.log(definirFrequenciaPalavras(texto))

console.log("\nTESTE DA FUNÇÃO PRINCIPAL:")
console.log(analisarTexto(texto))
