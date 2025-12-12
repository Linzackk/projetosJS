// Analisar um array de numeros e definir: SEM UTILIZAR FUNCOES PRONTAS
// {
//   maior: número,
//   menor: número,
//   media: número,
//   soma: número,
//   ordenados: array,
//   acimaDaMedia: array
// }

import { numeros5, numeros10, numeros50 } from "./numerosParaAnalise.js";

function analisarNumeros(numeros) { // Função Principal que chama as outras
    bubbleSort(numeros)
    return {
        "maior": encontrarMaior(numeros),
        "menor": encontrarMenor(numeros),
        "media": encontrarMedia(numeros),
        "soma": calcularSoma(numeros),
        "ordenados": numeros,
        "acimaDaMedia": encontrarNumerosAcimaMedia(numeros, encontrarMedia(numeros))
    }
}

function encontrarMaior(numeros) {
    let maior = numeros[0];
    for (let numero = 0; numero < numeros.length; numero++) {
        if (numeros[numero] > maior) {
            maior = numeros[numero]
        }
    }
    return maior
}

function encontrarMenor(numeros) {
    let menor = numeros[0];
    for (let numero = 0; numero < numeros.length; numero++) {
        if (numeros[numero] < menor) {
            menor = numeros[numero]
        }
    }
    return menor
}

function encontrarMedia(numeros) {
    let somaTotal = calcularSoma(numeros)
    return somaTotal / numeros.length
}

function calcularSoma(numeros) {
    return numeros.reduce((acummulator, currentValue) => acummulator + currentValue, 0)
}

function bubbleSort(numeros) {
    let n = numeros.length - 1
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let variavelAuxliar = numeros[j]
                numeros[j] = numeros[j + 1]
                numeros[j + 1] = variavelAuxliar
            }
        }
    }
}

function selectionSort(numeros) {
    let n = numeros.length

    for (let i = 0; i < n; i++) {
        let menorIndex = i

        for (let j = i + 1; j < n; j++) {
            if (numeros[j] < numeros[menorIndex]) {menorIndex = j}
        }

        let variavelAuxliar = numeros[i]
        numeros[i] = numeros[menorIndex]
        numeros[menorIndex] = variavelAuxliar;
    }
}

function encontrarNumerosAcimaMedia(numeros, media) {
    const acimaDaMedia = numeros.filter(n => n > media)
    return acimaDaMedia
}

console.log(encontrarMaior(numeros5))
console.log(encontrarMenor(numeros5))
console.log(encontrarMedia(numeros5))
console.log(calcularSoma(numeros5))
console.log(encontrarNumerosAcimaMedia(numeros5, 7))

let ordenadoPorBubble = [...numeros5]
let ordenadoPorSelection = [...numeros5]

bubbleSort(ordenadoPorBubble)
console.log(ordenadoPorBubble)

selectionSort(ordenadoPorSelection)
console.log(ordenadoPorSelection)

console.log(analisarNumeros(numeros5))
console.log(analisarNumeros(numeros10))
console.log(analisarNumeros(numeros50))