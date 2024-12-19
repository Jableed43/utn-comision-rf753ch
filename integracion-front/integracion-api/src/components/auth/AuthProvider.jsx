/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState, createContext, useContext } from 'react'
import useLoginUser from '../../hooks/user/useLoginUser'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const { loginUser, error } = useLoginUser()

    const [ isAuthenticated, setIsAuthenticated ] = useState(() => {
        return localStorage.getItem("token-utn") !== null;
    } )

    const login = async (formData) => {
       const success = await loginUser(formData)
       if(success){
        setIsAuthenticated(true)
        return true
       } else {
        console.error("Auth error", error)
        return false
       }
    }

    const logout = () => {
        localStorage.removeItem("token-utn")
        setIsAuthenticated(false)
    }

    //sincronizar el estado de autenticacion con localStorage
    useEffect(()=> {
        if(!isAuthenticated){
            localStorage.removeItem("token-utn")
        }
    }, [isAuthenticated])

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)