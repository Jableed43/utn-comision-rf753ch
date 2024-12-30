import { useState } from "react";

function useFetchCategory() {
    const initialUrl = `${import.meta.env.VITE_BACKEND_ENDPOINT}/category/get/`;
    //categories sirve para guardar los datos que traigo de la api
    const [categories, setCategories] = useState([])
    //error es para manejar los mensajes de errores y pasarlos a mis componentes
    const [error, setError] = useState(null)
    //loading permite saber si mis datos se estan solicitando, por lo tanto debo esperar
    const [loading, setLoading] = useState(false)
    //done sirve para conocer el estado de mi peticion, si esta esta finalizada
    //tambien me permite no hacer llamados extra
    const [done, setDone] = useState(false)


    const fetchCategory = async () => {
        //Evita nuevos llamados si ya esta en proceso o se completo la solicitud
        if(loading || done) return;
        //iniciamos la carga
        setLoading(true)

        try {
            const token = localStorage.getItem("token-utn")
            const response = await fetch(initialUrl, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            
            if(response.ok){
                //recibo la data, la paso a obj de js
                const data = await response.json()
                //seteo mi estado con las categorias
                setCategories(data)
                //paso a done mi peticion, dado que se ha completado
                setDone(true);
            } else {
                setError("Error al cargar categorias")
            }

        } catch (error) {
            setError(error.message)
        } finally {
            //cuando usas try-catch podes añadir un paso mas al finalizar llamado finally
            setLoading(false)
            //terminar la carga, no importa si fue exitosa la peticion o no
        }
    }

    return { categories, error, fetchCategory, done, loading }
}

export default useFetchCategory;