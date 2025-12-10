// Sistema Bancário

// deve possuir banco global com todos os clientes
// cada cliente deve ter ID, Nome, Saldo

// valor deve ser > 0

// não permitir saldo negativo

// mostrar erros legíveis

// Criar função historico:
// { tipo: "saque"|"deposito"|"transferencia", valor, data }

const banco = {
    "clientes": []
};

function verificarSaldoNegativo(posicaoConta, valor) {
    if (banco["clientes"][posicaoConta]["saldo"] - valor < 0) {
        return true
    }
    return false
}

function gerarID() {
    let clientes = banco["clientes"]
    if (clientes.length === 0) {
        return 0
    }
    else {
        return clientes[clientes.length - 1]["id"] + 1
    }
}

function criarCliente(nome) {
    const cliente = {
        "id": gerarID(),
        "nome": nome,
        "saldo": 0
    }
    banco["clientes"].push(cliente);
    console.log("Conta Adicionada com Sucesso.")
}

function encontrarPorID(id) {
    for (let i in banco["clientes"]) {
        if (banco["clientes"][i]["id"] === id) {
            return i
        }
    }
    return -1
}

function idExistente(id) {
    let posicaoConta = encontrarPorID(id)
    if (posicaoConta === -1) {
        console.log("Conta Inexistente")
        return -1
    }
    return posicaoConta
}

function depositar(id, valor) {
    let posicaoConta = idExistente(id)
    if (posicaoConta === -1) {
        return
    }
    banco["clientes"][posicaoConta]["saldo"] += valor;
    console.log("Valor Depositado com Sucesso.")
}

function sacar(id, valor) {
    let posicaoConta = idExistente(id)
    if (posicaoConta === -1) {
        return
    }
    if (verificarSaldoNegativo(posicaoConta, valor) === true) {
        console.log("Quantia indisponível para Saque.")
        return
    }
    banco["clientes"][posicaoConta]["saldo"] -= valor;
    console.log("Valor Sacado com Sucesso.")
}

function transferir(idOrigem, idDestino, valor) {
    let posicaoContaOrigem = idExistente(idOrigem)
    let posicaoContaDestino = idExistente(idDestino)
    if (posicaoContaOrigem === -1) {
        console.log("Conta de Origem Inexistente.")
        return
    }
    if (posicaoContaDestino === -1) {
        console.log("Conta de Destino Inexistente.")
        return
    }
    if (verificarSaldoNegativo(posicaoContaOrigem, valor) === true) {
        console.log("Quantia indisponível para Transferência.")
        return
    }
    banco["clientes"][posicaoContaOrigem]["saldo"] -= valor;
    banco["clientes"][posicaoContaDestino]["saldo"] += valor;
    console.log("Transferência realizada comn sucesso.")
}

function extrato(id) {
    let posicaoConta = idExistente(id)
    if (posicaoConta === -1) {
        return
    }
    let cliente = banco["clientes"][posicaoConta]
    for (let i in cliente) {
        console.log(`${i}: ${cliente[i]}`)
    }
    console.log()
}

function listarContas() {
    console.log()
    for (let i in banco["clientes"]) {
        console.log(banco["clientes"][i])
    }
}

criarCliente("Isaac")
criarCliente("Pedro")
criarCliente("Jorge")
criarCliente("Carol")
criarCliente("Junior")
listarContas()

depositar(0, 500)

sacar(0, 1000)

depositar(7, 10)

transferir(0, 3, 250)

extrato(0)
extrato(3)
extrato(1)