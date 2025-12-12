export function validarCupom(cupom) {
    for (let i = 0; i < CUPONS_VALIDOS.length; i++) {
        if (cupom === CUPONS_VALIDOS[i][0]) {
            console.log("   Cupom Válido")
            return CUPONS_VALIDOS[i][1]
        }
    }
    console.log("   Cupom Inválido.")
    return 0
}

const CUPONS_VALIDOS = [["DESC10", 10], ["DESC20", 20]]