import { createContext, useState, useEffect } from "react";

export const PedidoContext = createContext({});

export function PedidoProvider({ children }) {
    const [saldoComanda, setSaldoComanda] = useState(0);
    const [comanda, setComanda] = useState({});
    const [total, setTotal] = useState(0);
    const [saldoFinal, setSaldoFinal] = useState(0);

    const loadComanda = (comanda) => {
        setComanda(comanda);
        setSaldoComanda(comanda.saldo);
        setSaldoFinal(comanda.saldo);
    };

    const addProduto = (produto) => {
        setTotal(total + produto.preco);
        setSaldoFinal(saldoComanda + total + produto.preco)
    };

    const removeProduto = (produto) => {
        setTotal(total - produto.preco);
        setSaldoFinal(saldoComanda + total - produto.preco)
    };

    return (
        <PedidoContext.Provider
            value={{
                saldoComanda,
                comanda,
                total,
                saldoFinal,
                loadComanda,
                addProduto,
                removeProduto,
            }}
        >
            {children}
        </PedidoContext.Provider>
    );
}
