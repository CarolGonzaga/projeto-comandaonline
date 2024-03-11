import { createContext, useState } from "react";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

    const [user, setUser] = useState({
        email: "anacquesta@gmail.com"
    })

    function login(email, senha) {

        if (email == "anacquesta@gmail.com" && senha == "123") {
            setUser({
                nome: "Carol Gonzaga",
                email
            })
            return "Ok"
        }

        if (email == "mifuturaesposa@gmail.com" && senha == "456") {
            setUser({
                nome: "Futura Esposa",
                email
            })
            return "Ok"
        }

        return "Erro"

    }

    function logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider>
    )

}