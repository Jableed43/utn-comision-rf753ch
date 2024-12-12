import { useState } from "react";

function useFetchUser() {
    const [error, setError] = useState()
    const [done, setDone] = useState()
    const initialUrl = "http://localhost:3000/api/user/get";

    const fetchUser = async () => {
        try {
            const response = await fetch(initialUrl)

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