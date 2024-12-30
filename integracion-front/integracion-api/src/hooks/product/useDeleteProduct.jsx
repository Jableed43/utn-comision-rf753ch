import { useState } from "react";

function useDeleteProduct() {
    const [error, setError] = useState()

    const deleteProduct = async (id) => {
        const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}/product/delete/`;

        const token = localStorage.getItem("token-utn")
        try {
          const response = await fetch(`${initialUrl}${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if(response.ok){
                return true
            } else {
                setError(error.message)
                return false
            }
        } catch (error) {
            setError(error.message)
            return false
        }
    }
    return {deleteProduct, error}
}

export default useDeleteProduct;