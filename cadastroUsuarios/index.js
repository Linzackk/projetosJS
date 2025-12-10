// Fazer um sistema de cadastro de Usuários

// não pode ter dois usuários com o mesmo e-mail e id

// senha deve ter ao menos 6 caracteres

// imprimir erros organizados

let banco = [];

function criarUsuario(nome, email, senha) {
    let emailExiste = false;
    let senhaValida = true;
    if (buscarUsuarioPorEmail(email) !== -1) {
        emailExiste = true;
        console.log("Email já cadastrado.")
    }
    if (senha.length < 6) {
        senhaValida = false;
        console.log("Senha inválida")
    }
    if (!emailExiste && senhaValida) {
        usuario = [gerarId(), nome, email, senha]
        banco.push(usuario)
        console.log("Usuário Cadastrado com Sucesso.")
    }
}

function listarUsuarios() {
    for (let i = 0; i < banco.length; i++) {
        let infoUsuario = "";
        for (let j = 0; j < 4; j++) {
            infoUsuario += `${banco[i][j]} `
        }
        console.log("\n" + infoUsuario)
    }
}

function buscarUsuarioPorEmail(email) {
    for (let i = 0; i < banco.length; i++) {
        if (banco[i][2] === email) {
            return i
        }
    }
    return -1;
}

function removerUsuario(email) {
    let posicao = buscarUsuarioPorEmail(email) 
    if (posicao === -1) {
        console.log("Usuário com Email inexistente.")
        return
    }
    banco.splice(posicao, 1)
    console.log("Usuário deleteado com sucesso.")
}

function gerarId() {
    if (banco.length === 0) {
        return 0
    }
    return (banco[banco.length - 1][0] + 1)
}


let contas = [
    ["Isaac", "isaacvrau@gmail.com", "123456"],
    ["Isaac", "isacvrau@gmail.com", "1456"],
    ["Isaac", "isaacvrau@gmail.com", "123456"],
    ["Isaac", "iscvrau@gmail.com", "123456"],
    ["Isaac", "isaavrau@gmail.com", "13456"],
    ["Isaac", "isaacvrau@gmail.com", "1236"],
    ["Carou", "crolinagames@gmail.com", "123456"],
    ["Carou", "caolinagames@gmail.com", "123456"],
    ["Carou", "carlinagames@gmail.com", "123456"],
    ["Carou", "caroinagames@gmail.com", "123456"],
    ["Carou", "carolnagames@gmail.com", "123456"],
    ["Carou", "caroliagames@gmail.com", "123456"],
]

listarUsuarios()
for (let i = 0; i < contas.length; i++) {
    criarUsuario(contas[i][0], contas[i][1], contas[i][2])
    console.log()
}
listarUsuarios()

removerUsuario("isaacvrau@gmail.com")
removerUsuario("iscvrau@gmail.com")

listarUsuarios()