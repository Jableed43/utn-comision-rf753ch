import { useState } from "react";

function useEditProduct() {
    const [error, setError] = useState()

    const editProduct = async (id, formData) => {
        const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}product/update/`;

        const token = localStorage.getItem("token-utn")
        try {
          const response = await fetch(`${initialUrl}${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            if(response.ok){
                return true
            } else {
                setError(error.message)
                return false }

            } catch (error) {
                setError(error.message)
                return false
            }
        }
    return { editProduct, error }
}

export default useEditProduct