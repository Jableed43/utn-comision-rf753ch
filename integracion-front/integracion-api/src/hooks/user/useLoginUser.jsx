import { useState } from "react"

function useLoginUser() {
    const [error, setError] = useState();
    const initialUrl = "http://localhost:3000/api/user/login"
    const loginUser = async formData => {
        try {
            const response = await fetch(initialUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem("token-utn", data.token)
                return true
            } else {
                console.log({response})
                setError(response.statusText)
                return false
            }

        } catch (error) {
            console.error(error)
            setError(error)
            return false;
        }
    }
    return { loginUser, error }
}

export default useLoginUser;