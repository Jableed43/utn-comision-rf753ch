import { useState } from "react";

function useDeleteProduct() {
    const [error, setError] = useState()

    const deleteProduct = async (id) => {
        const initialUrl = "http://localhost:3000/api/product/delete/"
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