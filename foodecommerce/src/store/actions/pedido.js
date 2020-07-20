export function addPedido(pratos){
    return {
        type: 'ADD_PRATO',
        pratos
    }
}

export function removePedido(id){
    return {
        type: 'REMOVE_PRATO',
        id,
    }
}

export function UpdateQuantidadePedido(id, amount){
    return {
        type: 'UPDATE_AMOUNT_PEDIDO',
        id,
        amount,
    }
}