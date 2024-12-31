import { useState } from "react";

function useRegisterUser() {
    const [error, setError] = useState();
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}user/create`;

    const registerUser = async (formData) => {
        try {
         const response = await fetch(initialUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

           if(response.ok){
           const res = await response.json()
            console.log(res)
            return true;
           } else {
            console.error(response.statusText)
            setError(response.statusText)
            return false
           }

        } catch (error) {
            console.error(error)
            setError(error)
            return false
        }
    }

    return { registerUser, error }
}

export default useRegisterUser;