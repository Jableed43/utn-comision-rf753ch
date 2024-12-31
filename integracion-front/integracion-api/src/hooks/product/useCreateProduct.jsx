import { useState } from "react";

function useCreateProduct() {
    const [error, setError] = useState();
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}product/create`;

    const createProduct = async (formData) => {
        try {
            const token = localStorage.getItem("token-utn")
            const response = await fetch(initialUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
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

    return { createProduct, error }
}

export default useCreateProduct;