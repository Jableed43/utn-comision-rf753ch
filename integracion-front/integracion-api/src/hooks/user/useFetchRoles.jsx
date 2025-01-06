import { useState } from "react";

function useFetchRoles() {
    const [error, setError] = useState(null)
    const [done, setDone] = useState(false)
    const [roles, setRoles] = useState([])
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}user/roles`;

    const fetchRoles = async () => {
        try {
            const response = await fetch(initialUrl)

            if(response.ok){
              const roles = await response.json()
              //sirve para confirmar la finalizacion de la operacion
              setDone(true)
              setRoles(roles)
            } else {
                console.error(response.statusText)
                setError(response.statusText)
                setDone(false)
            }

        } catch (error) {
            console.error(error)
            setError(error)
        }
    }

    return { fetchRoles, error, done, roles }
}

export default useFetchRoles;