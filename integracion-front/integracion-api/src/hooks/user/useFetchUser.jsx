import { useState } from "react";

function useFetchUser() {
    const [error, setError] = useState()
    const [done, setDone] = useState()
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}user/get`;

    const fetchUser = async () => {
        const token = localStorage.getItem("token-utn")
        try {
            const response = await fetch(initialUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            })

            if(response.ok){
              const users = await response.json()
              console.log(users)
              //sirve para confirmar la finalizacion de la operacion
              setDone(true)
              return users;
            } else {
                console.error(response.statusText)
                setError(response.statusText)
                setDone(false)
                return []
            }

        } catch (error) {
            console.error(error)
            setError(error)
        }
    }

    return { fetchUser, error, done }
}

export default useFetchUser;