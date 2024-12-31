import { useState } from "react";

function useFetchStatus() {
    const [error, setError] = useState(null)
    const [done, setDone] = useState(false)
    const [ status, setStatus ] = useState([])
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}product/status`;
    
    const fetchStatus = async () => {
        try {
            const token = localStorage.getItem("token-utn")
            const response = await fetch(initialUrl , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })

            if(response.ok){
              const status = await response.json()
              //sirve para confirmar la finalizacion de la operacion
              setDone(true)
              setStatus(status)
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

    return { fetchStatus, error, done, status }
}

export default useFetchStatus;