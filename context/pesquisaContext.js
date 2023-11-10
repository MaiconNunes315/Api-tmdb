import { createContext, useState } from "react";


export const PesquisaContext = createContext();

export const PesquisaProvider = ({ children }) => {
    const [pesquisa, setPesquisa] = useState('');

    const filtro = (valor) => {
        setPesquisa(valor)
    }

    return (
        <PesquisaContext.Provider value={{ pesquisa, filtro }}>
            {children}
        </PesquisaContext.Provider>
    )
}