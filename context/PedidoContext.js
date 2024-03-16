import { createContext, useState } from "react";

export const PedidoContext = createContext({})

export function PedidoProvider({ children }) {
    const [ saldoComanda, setSaldoComanda ] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [ saldoFinal, setSaldoFinal ] = useState(0)
    const [ comanda, setComanda ] = useState({})

    const addProduto = (produto) => {
        setTotal(produto.preco)
        setSaldoFinal(saldoComanda + saldoFinal + produto.preco)
    }

    const removeProduto = (produto) => {
        setTotal(total - produto.preco)
        setSaldoFinal(saldoComanda + total)
    }

    const loadComanda = (comanda) => {
        setComanda(comanda)
        setSaldoComanda(comanda.saldo)
    }

    return (
        <PedidoContext.Provider value={{ saldoComanda, total, saldoFinal, comanda, addProduto, removeProduto, loadComanda }}>
            {children}
        </PedidoContext.Provider>
    )
}