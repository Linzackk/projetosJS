// Criar um simulador de loja digital

// Carrinho possui:
// {
//   idProduto,
//   quantidade
// }

import { produtos } from "./produtos.js"
import { carrinho } from "./carrinho.js"
import { validarCupom } from "./cupons.js"

function cadastrarProduto(nome, preco, estoque) {
    let produto = {
        "id": gerarId(),
        "nome": nome,
        "preco": preco,
        "estoque": estoque,
    }
    console.log("Adicionando produto: " + nome)
    produtos.push(produto)
    console.log("   Produto Adicionado com Sucesso.\n")
}

function gerarId() {
    if (produtos.length === 0) {
        return 0
    }
    else {
        return produtos[produtos.length - 1]["id"] + 1
    }
}

function verificarEstoque(idProduto, qnt) {
    for (let produto = 0; produto < produtos.length; produto++) {
        if (produtos[produto]["id"] === idProduto) {
            if (produtos[produto]["estoque"] >= qnt) {return true}
            else {return false}
        }
    }
}

function listarProdutos() {
    let informacao;
    for (let produto = 0; produto < produtos.length; produto++) {
        informacao = `${produtos[produto]["id"]} - ${produtos[produto]["nome"]} - ${produtos[produto]["preco"]} - ${produtos[produto]["estoque"]}`
        console.log(informacao)
    }
    console.log()
}

function pegarPosicaoProduto(idProduto) {
    for (let produto = 0; produto < produtos.length; produto++) {
        if (produtos[produto]["id"] === idProduto) {
            return produto
        }
    }
    return -1
}

function adicionarAoCarrinho(idProduto, qnt) {
    let posicaoProduto = pegarPosicaoProduto(idProduto)
    if (posicaoProduto === -1) { // Verifica se o Produto Existe
        console.log("Produto com ID " + idProduto + " Inexistente.") 
        return
    }
    if (produtos[posicaoProduto]["estoque"] < qnt) { // Verifica se Tem o estoque suficiente para a compra
        console.log(`Não há estoque para ${qnt} ${produtos[posicaoProduto]["nome"]}`)
        return
    }
    produtos[posicaoProduto]["estoque"] -= qnt // Diminui o Estoque na loja

    let existeNoCarrinho = false;
    for (let i = 0; i < carrinho.length; i++) { // Verifica se já existe o produto no carrinho
        if (carrinho[i]["idProduto"] === idProduto) {
            existeNoCarrinho = true;
            carrinho[i]["qntd"] += qnt
            break
        }
    } 
    if (existeNoCarrinho === false){ // Caso não exista o produto no carrinho, adiciona ao carrinho
        carrinho.push({
            "idProduto": produtos[posicaoProduto]["id"],
            "qntd": qnt
        })
    }
    console.log(`Adicionado ${qnt} do produto ${produtos[posicaoProduto]["nome"]} ao Carrinho.`)
}

function removerDoCarrinho(idProduto) {
    let ExisteIdCarrinho = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i]["idProduto"] === idProduto) {
            console.log(`Removendo ${carrinho[i]["idProduto"]} do Carrinho.`)
            carrinho.splice(i, 1)
            return
        }
    } 
    console.log(`ID ${idProduto} não existe no carrinho.`)
}

function calcularTotal() {
    let total = 0;
    for (let produto = 0; produto < carrinho.length; produto++) {
        let posicaoProduto = pegarPosicaoProduto(carrinho[produto]["idProduto"])
        let precoProduto = produtos[posicaoProduto]["preco"]
        total += precoProduto * carrinho[produto]["qntd"]
    }
    return total
}

function calcularFrete(valorCompra) {
    if (valorCompra < 100) {
        return 10
    }
    else {
        return 0
    }
}

function finalizarCompra(cupom = "") {
    let precoTotal = calcularTotal()
    let descontoPorcentagem = 0
    if (cupom !== "") {
        descontoPorcentagem = validarCupom(cupom)
    }
    if (descontoPorcentagem > 0) {
        precoTotal *= (descontoPorcentagem / 100) + 1
    }
    precoTotal += calcularFrete(precoTotal)
    console.log("O Preço Final é de: R$" + precoTotal)
}

cadastrarProduto("Teclado Mecânico", "49.99", "5")
listarProdutos()

console.log(verificarEstoque(5, 3))
console.log(verificarEstoque(5, 30))

adicionarAoCarrinho(5, 10)
adicionarAoCarrinho(5, 30)

adicionarAoCarrinho(7, 2)
adicionarAoCarrinho(3, 5)
adicionarAoCarrinho(1, 9)
adicionarAoCarrinho(7, 2)
adicionarAoCarrinho(11, 2)

removerDoCarrinho(7)
removerDoCarrinho(5)

finalizarCompra()