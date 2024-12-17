import { useState } from "react";

function useFetchProduct() {
    const [error, setError] = useState()
    const [done, setDone] = useState()
    const initialUrl = "http://localhost:3000/api/product/get";

    const fetchProduct = async () => {
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
              const products = await response.json()
              console.log(products)
              //sirve para confirmar la finalizacion de la operacion
              setDone(true)
              return products;
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

    return { fetchProduct, error, done }
}

export default useFetchProduct;